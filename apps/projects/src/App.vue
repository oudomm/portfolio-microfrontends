<script setup lang="ts">
const projects = [
  {
    name: "Endora",
    description:
      "A BaaS platform with visual schema designer, AI web scraping, and auto-generated API docs.",
    tech: ["Next.js", "Spring Boot", "MongoDB", "PostgreSQL", "Keycloak", "Claude API", "Docker", "Google Cloud", "Nginx"],
    source: "https://github.com/oudomm/endora-frontend",
    live: "https://www.endora.space",
  },
  {
    name: "LineupLab",
    description:
      "Create football lineups with drag-and-drop, player photos, bench management, and image export.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    source: "https://github.com/oudomm/LineupLab",
    live: "https://lineup.oudom.dev",
  },
];
</script>

<template>
  <div class="space-y-8 animate-fade-in-up">
    <div class="space-y-3">
      <h1 class="text-3xl font-bold tracking-tight">
        Projects
      </h1>
      <p class="text-muted">
        A selection of things I've built and contributed to.
      </p>
    </div>

    <div class="grid gap-4 md:grid-cols-2">
      <div
        v-for="project in projects"
        :key="project.name"
        class="glass-card rounded-xl p-6 space-y-4"
      >
        <h2 class="text-lg font-semibold">{{ project.name }}</h2>
        <p class="text-sm text-muted leading-relaxed">
          {{ project.description }}
        </p>

        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="tag in project.tech"
            :key="tag"
            class="rounded-md border border-border/50 bg-bg/50 px-2 py-0.5 font-mono text-xs text-fg/80"
          >
            {{ tag }}
          </span>
        </div>

        <div class="flex gap-4 text-sm pt-1">
          <a
            :href="project.source"
            target="_blank"
            class="text-muted hover:text-accent transition-colors"
          >
            Source &rarr;
          </a>
          <a
            v-if="project.live"
            :href="project.live"
            target="_blank"
            class="text-muted hover:text-accent transition-colors"
          >
            Live &rarr;
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
