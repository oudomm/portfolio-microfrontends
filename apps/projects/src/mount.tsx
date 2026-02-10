import { createApp } from "vue";
import type { App as VueApp } from "vue";
import App from "./App.vue";

let app: VueApp<Element> | null = null;

export function mount(el: HTMLElement, props?: Record<string, any>) {
  app = createApp(App, props);
  app.mount(el);
}

export function unmount() {
  // Vue unmount:
  app?.unmount();
  app = null;
}
