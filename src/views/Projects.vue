<template>
  <div>
    <div class="bg-white border border-gray-200 p-5 rounded-md shadow-lg">
      <h1 class="text-2xl sm:text-4xl font-semibold">Projects</h1>
      <p>Here you can find all of my projects.</p>
    </div>
    <div
      class="mt-3 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <div
        v-for="project in projects"
        :key="project.name"
        class="bg-white border border-gray-200 p-5 rounded-md shadow-lg"
      >
        <h2 class="text-lg font-semibold">{{ project.name }}</h2>
        <p class="text-gray-400">{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { projects } from "@/data/projects";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      projects,
    };
  },
});
</script>
