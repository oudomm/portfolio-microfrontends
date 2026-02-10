import { useEffect, useRef, useState } from "react";

type RemoteApi = {
  mount?: (el: HTMLElement, props?: Record<string, any>) => void;
  unmount?: () => void;
  default?: {
    mount?: (el: HTMLElement, props?: Record<string, any>) => void;
    unmount?: () => void;
  };
};

export function RemoteMount({
  load,
  props,
}: {
  load: () => Promise<any>;
  props?: Record<string, any>;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let api: RemoteApi | null = null;
    let cancelled = false;

    (async () => {
      try {
        setError(null);
        const mod = await load();

        // ✅ support both named exports and default exports
        api = (mod?.mount ? mod : mod?.default) as RemoteApi;

        const mountFn = api?.mount;
        if (!mountFn) {
          console.log("REMOTE MODULE SHAPE:", mod);
          throw new Error("Remote module has no mount() export");
        }

        if (cancelled) return;
        if (!ref.current) return;

        mountFn(ref.current, props);
      } catch (e: any) {
        console.error("Remote load/mount failed:", e);
        setError(e?.message ?? String(e));
      }
    })();

    return () => {
      cancelled = true;
      const unmountFn = api?.unmount ?? api?.default?.unmount;
      unmountFn?.();
      if (ref.current) ref.current.innerHTML = "";
    };
  }, [load]);

  if (error) {
    return (
      <div style={{ padding: 12, border: "1px solid #f66", borderRadius: 12 }}>
        <b>Failed to load remote:</b>
        <pre style={{ whiteSpace: "pre-wrap" }}>{error}</pre>
      </div>
    );
  }

  return <div ref={ref} style={{ minHeight: 300 }} />;
}
