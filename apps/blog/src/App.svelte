<script lang="ts">
  const posts = [
    {
      title: "Why I Built My Portfolio with Micro Frontends",
      date: "2026-01-15",
      excerpt:
        "Exploring the trade-offs of splitting a personal site into independently deployed micro frontends.",
      category: "Architecture",
    },
    {
      title: "Scaling WebSockets: Lessons from Production",
      date: "2025-12-08",
      excerpt:
        "What I learned running persistent connections at scale — connection pooling, heartbeats, and graceful shutdowns.",
      category: "Backend",
    },
    {
      title: "A Practical Guide to Go Error Handling",
      date: "2025-11-20",
      excerpt:
        "Patterns for wrapping, propagating, and logging errors in Go without losing context.",
      category: "Go",
    },
    {
      title: "Docker Compose vs Kubernetes for Side Projects",
      date: "2025-10-05",
      excerpt:
        "When a simple compose file is enough and when it's time to reach for K8s.",
      category: "DevOps",
    },
  ];
</script>

<div class="space-y-8">
  <div class="space-y-2">
    <h1 class="text-3xl font-bold tracking-tight">Blog</h1>
    <p class="text-[color:var(--color-muted)]">
      Writing about software, systems, and the things I learn along the way.
    </p>
  </div>

  <div class="space-y-1">
    {#each posts as post}
      <article
        class="flex flex-col gap-1 border-b border-[color:var(--color-border)] py-5 last:border-b-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
      >
        <div class="flex-1 space-y-1">
          <h2 class="font-semibold">{post.title}</h2>
          <p class="text-sm text-[color:var(--color-muted)]">{post.excerpt}</p>
        </div>

        <div
          class="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end sm:gap-1"
        >
          <time class="text-xs text-[color:var(--color-muted)]"
            >{post.date}</time
          >
          <span
            class="rounded border border-[color:var(--color-border)] px-2 py-0.5 font-mono text-xs text-[color:var(--color-muted)]"
          >
            {post.category}
          </span>
        </div>
      </article>
    {/each}
  </div>
</div>
