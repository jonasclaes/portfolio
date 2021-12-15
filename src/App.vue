<template>
  <div class="min-h-screen h-full w-full flex flex-col">
    <!-- Navigation bar -->
    <div class="bg-blue-500 text-white z-10">
      <div class="container mx-auto">
        <div class="max-w-6xl mx-auto flex justify-between p-3">
          <div>
            <h1 class="font-semibold">Jonas' Portfolio</h1>
          </div>
          <div class="flex space-x-3">
            <router-link
              v-for="navigationLink in navigationLinks"
              :key="navigationLink.name"
              :to="navigationLink.location"
              :class="{ 'font-semibold': navigationLink.name === $route.name }"
              >{{ navigationLink.name }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-white min-h-screen h-full w-full absolute top-0 pt-14 pb-3 overflow-y-auto"
    >
      <div class="container mx-auto">
        <div class="max-w-6xl mx-auto px-3">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const navigationLinks = [
      {
        name: "Home",
        location: "/",
      },
      {
        name: "About",
        location: "/about",
      },
      {
        name: "Projects",
        location: "/projects",
      },
    ];

    return {
      navigationLinks,
    };
  },
});
</script>
