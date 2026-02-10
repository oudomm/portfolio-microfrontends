const stack = {
  Languages: ["TypeScript", "Go", "Python", "Java"],
  Frontend: ["React", "Vue", "Svelte", "Tailwind CSS"],
  Backend: ["Node.js", "PostgreSQL", "Redis", "GraphQL"],
  DevOps: ["Docker", "Kubernetes", "AWS", "GitHub Actions"],
};

export default function App() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">Oudom</h1>
        <p className="text-lg text-[var(--color-muted)]">
          Full-stack developer building fast, composable systems for the modern
          web.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-muted)]">
            Available for work
          </span>
          <span className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-muted)]">
            Phnom Penh, KH
          </span>
          <span className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-muted)]">
            Remote-friendly
          </span>
        </div>

        <div className="flex gap-4 text-sm text-[var(--color-muted)]">
          <a
            href="https://github.com/oudomm"
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/oudomm"
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:oudomphoem@gmail.com"
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            Email
          </a>
        </div>
      </section>

      {/* About */}
      <section className="space-y-4">
        <h2 className="text-sm font-medium uppercase tracking-widest text-[var(--color-muted)]">
          About
        </h2>
        <p className="max-w-2xl leading-relaxed text-[var(--color-fg)]">
          I'm a developer who enjoys working across the stack — from crafting
          clean UIs to designing resilient backend services. I care about
          performance, simplicity, and shipping things that work well. Currently
          exploring micro-frontend architectures and distributed systems.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="space-y-6">
        <h2 className="text-sm font-medium uppercase tracking-widest text-[var(--color-muted)]">
          Stack
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {Object.entries(stack).map(([category, items]) => (
            <div key={category} className="space-y-2">
              <h3 className="text-xs font-medium text-[var(--color-muted)]">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-[var(--color-border)] bg-[var(--color-card)] px-2.5 py-1 font-mono text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
