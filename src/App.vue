<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen w-full bg-gray-100">
    <div class="bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg">
      <nav class="container max-w-6xl mx-auto px-3">
          <div class="h-16 flex items-center justify-between">
              <!-- Branding -->
              <div>
                <router-link to="/">Jonas Claes | Portfolio</router-link>
              </div>

              <!-- Links -->
              <div class="h-16 flex items-center space-x-3">
                <router-link to="/" :class="$route.name === 'Home' ? 'font-semibold' : ''">Home</router-link>
                <router-link to="/projects" :class="$route.name === 'Projects' ? 'font-semibold' : ''">Projects</router-link>
              </div>
          </div>
      </nav>
    </div>
    <div class="container max-w-6xl mx-auto p-3">
      <router-view></router-view>
    </div>
  </div>
</template>
