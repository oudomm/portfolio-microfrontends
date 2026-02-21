<script lang="ts">
  import type { Post } from "./posts";

  let { post, onclick }: { post: Post; onclick: () => void } = $props();
</script>

<div
  class="group border-t border-border py-6 cursor-pointer"
  {onclick}
  onkeydown={(e) => e.key === "Enter" && onclick()}
  role="button"
  tabindex="0"
>
  <div class="flex items-start justify-between gap-6">
    <div class="space-y-2">
      <div class="flex items-center gap-2 font-mono text-xs text-muted">
        <time>{post.date}</time>
        <span>·</span>
        <span>{post.category}</span>
      </div>
      <h2 class="text-lg font-semibold group-hover:text-accent transition-colors">
        {post.title}
      </h2>
      <p class="text-sm text-muted leading-relaxed">{post.excerpt}</p>
    </div>
    <span class="mt-1 shrink-0 text-lg text-muted group-hover:text-accent transition-colors">
      ↗
    </span>
  </div>
</div>
