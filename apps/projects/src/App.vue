<script setup lang="ts">
const projects = [
  {
    name: "Endora",
    description:
      "A Backend-as-a-Service platform for frontend developers.",
    tech: ["Next.js", "Spring Boot", "MongoDB", "PostgreSQL"],
    source: "https://github.com/oudomm/endora-frontend",
    live: "https://www.endora.space",
  },
  {
    name: "LineupLab",
    description:
      "A free tool to create football lineups with drag-and-drop positioning and image export.",
    tech: ["Next.js", "TypeScript"],
    source: "https://github.com/oudomm/LineupLab",
    live: "https://lineup.oudom.dev",
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
