import App from "./App.svelte";
import { mount as svelteMount, unmount as svelteUnmount } from "svelte";

let instance: any = null;

export function mount(el: HTMLElement, props?: Record<string, any>) {
  instance = svelteMount(App, {
    target: el,
    props: props ?? {},
  });
}

export function unmount() {
  if (instance) {
    svelteUnmount(instance);
    instance = null;
  }
}
