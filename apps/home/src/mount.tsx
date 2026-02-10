import React from "react";
import { createRoot } from "react-dom/client";
import type { Root } from "react-dom/client";
import App from "./App";

let root: Root | null = null;

export function mount(el: HTMLElement, props?: Record<string, any>) {
  root = createRoot(el);
  root.render(
    <React.StrictMode>
      <App {...props} />
    </React.StrictMode>
  );
}

export function unmount() {
  root?.unmount();
  root = null;
}
