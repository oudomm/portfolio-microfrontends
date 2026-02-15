<script lang="ts">
  import type { Post } from "./posts";

  let { post, onclick }: { post: Post; onclick: () => void } = $props();
</script>

<div
  class="glass-card rounded-xl p-6 space-y-3 cursor-pointer"
  {onclick}
  onkeydown={(e) => e.key === "Enter" && onclick()}
  role="button"
  tabindex="0"
>
  <div class="flex items-center gap-3">
    <span
      class="rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-xs text-accent"
    >
      {post.category}
    </span>
    <time class="text-xs text-muted">{post.date}</time>
  </div>
  <h2 class="text-lg font-semibold">{post.title}</h2>
  <p class="text-sm text-muted leading-relaxed">{post.excerpt}</p>
  <span class="text-xs text-accent">Read more &rarr;</span>
</div>
