<script lang="ts">
  import { onMount } from "svelte";
  import { posts } from "./posts";
  import PostCard from "./PostCard.svelte";

  function getPostFromUrl(): number | null {
    const idx = parseInt(new URLSearchParams(window.location.search).get("post") ?? "");
    return idx >= 0 && idx < posts.length ? idx : null;
  }

  let activePost = $state<number | null>(getPostFromUrl());

  function openPost(index: number) {
    activePost = index;
    const url = new URL(window.location.href);
    url.searchParams.set("post", String(index));
    history.pushState({}, "", url);
  }

  function closePost() {
    activePost = null;
    const url = new URL(window.location.href);
    url.searchParams.delete("post");
    history.pushState({}, "", url);
  }

  onMount(() => {
    const onPopState = () => (activePost = getPostFromUrl());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  });

</script>

{#if activePost !== null}
  <!-- Single post view -->
  <div class="animate-fade-in">
    <button
      class="text-sm text-muted hover:text-accent transition-colors mb-8 cursor-pointer"
      onclick={closePost}
    >
      &larr; Back to all posts
    </button>

    <article class="max-w-2xl space-y-6">
      <div class="space-y-3">
        <div class="flex items-center gap-3">
          <span
            class="rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-xs text-accent"
          >
            {posts[activePost].category}
          </span>
          <time class="text-xs text-muted">{posts[activePost].date}</time>
        </div>
        <h1 class="text-3xl font-bold tracking-tight">{posts[activePost].title}</h1>
      </div>

      <div class="space-y-4">
        {#each posts[activePost].content as paragraph}
          <p class="text-sm leading-relaxed text-muted">{paragraph}</p>
        {/each}
      </div>
    </article>
  </div>
{:else}
  <!-- Post list view -->
  <div class="animate-fade-in-up">
    <div class="space-y-2 pb-8">
      <h1 class="text-3xl font-bold tracking-tight">Blog</h1>
      <p class="text-muted">
        Writing about software, systems, and the things I learn along the way.
      </p>
    </div>

    <div>
      {#each posts as post, i}
        <PostCard {post} onclick={() => openPost(i)} />
      {/each}
      <div class="border-t border-border"></div>
    </div>
  </div>
{/if}
