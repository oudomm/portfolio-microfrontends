<script setup lang="ts">
const projects = [
  {
    name: "micro-portfolio",
    description:
      "This site. Micro-frontend architecture with React, Vue, Svelte.",
    tech: ["React", "Vue", "Svelte", "Vite"],
    source: "https://github.com/oudom/micro-portfolio",
    live: "https://oudom.dev",
  },
  {
    name: "api-gateway",
    description: "Lightweight API gateway built with Go and Redis.",
    tech: ["Go", "Redis", "Docker"],
    source: "https://github.com/oudom/api-gateway",
    live: null,
  },
  {
    name: "realtime-chat",
    description: "WebSocket chat app with React and Node.js.",
    tech: ["React", "Node.js", "WebSocket", "PostgreSQL"],
    source: "https://github.com/oudom/realtime-chat",
    live: "https://chat.oudom.dev",
  },
  {
    name: "k8s-deployer",
    description: "CLI tool for simplified Kubernetes deployments.",
    tech: ["Go", "Kubernetes", "CLI"],
    source: "https://github.com/oudom/k8s-deployer",
    live: null,
  },
];
</script>

<template>
  <div class="space-y-8">
    <div class="space-y-2">
      <h1 class="text-3xl font-bold tracking-tight">Projects</h1>
      <p class="text-[var(--color-muted)]">
        A selection of things I've built and contributed to.
      </p>
    </div>

    <div class="grid gap-4 md:grid-cols-2">
      <div
        v-for="project in projects"
        :key="project.name"
        class="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] p-6 space-y-3"
      >
        <h2 class="font-semibold">{{ project.name }}</h2>
        <p class="text-sm text-[var(--color-muted)]">
          {{ project.description }}
        </p>

        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="tag in project.tech"
            :key="tag"
            class="rounded border border-[var(--color-border)] px-2 py-0.5 font-mono text-xs text-[var(--color-muted)]"
          >
            {{ tag }}
          </span>
        </div>

        <div class="flex gap-4 text-sm">
          <a
            :href="project.source"
            class="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            Source
          </a>
          <a
            v-if="project.live"
            :href="project.live"
            class="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
