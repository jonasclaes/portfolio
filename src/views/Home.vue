<template>
  <div>
    <div class="bg-white border border-gray-200 p-5 rounded-md shadow-lg">
      <h1 class="text-2xl sm:text-4xl font-semibold">
        Welcome to my portfolio!
      </h1>
      <p>
        Here you can find information about me, my experience and my projects.
      </p>
      <hr class="my-2 mx-5" />
      <div>
        <router-link to="/about" class="text-blue-500">About me</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>
