<script setup lang="ts">

</script>

<template>
  <div>
    <h1 class="text-xl">
      Parent Page
    </h1>
    <NuxtChild />
    <div class="flex space-x-2">
      <NuxtLink to="/" class="py-2 px-3 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-cyan-500/50 focus:outline-none">
        Back Home
      </NuxtLink>
      <NuxtLink to="/parent/child" class="py-2 px-3 bg-blue-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-blue-500/50 focus:outline-none">
        Go /parent/child
      </NuxtLink>
      <NuxtLink to="/parent/child2" class="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-indigo-500/50 focus:outline-none">
        Go /parent/child2
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>
