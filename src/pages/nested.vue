<script setup lang="ts">
const title = ref<string | any>('Nested Page')
const description = ref<string>('Nested Page Description')
useHead({
  title,
  meta: [{
    name: 'description',
    content: description,
  }],
})
</script>

<template>
  <div>
    <h1 class="text-xl">
      Nested Page
    </h1>
    <NuxtChild />
    <div class="flex space-x-2">
      <NuxtLink to="/nested/child" class="basic-tab-button bg-blue-500 shadow-blue-500/50">
        Go /nested/child
      </NuxtLink>
      <NuxtLink to="/nested/child2" class="basic-tab-button bg-indigo-500 shadow-indigo-500/50">
        Go /nested/child2
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>
