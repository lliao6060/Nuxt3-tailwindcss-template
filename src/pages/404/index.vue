<script setup lang="ts" name="404Page">
const title = ref<string | any>('404')
const description = ref<string>('404 Page Description')
useHead({
  title,
  meta: [{
    name: 'description',
    content: description,
  }],
})

definePageMeta({
  layout: false,
})
</script>

<template>
  <div class="h-screen bg-white py-24">
    <div class="flex flex-col items-center align-center">
      <h1 class="text-8xl font-semibold text-red-500">
        404
      </h1>
      <p class="my-8 text-3xl text-gray-800">
        Not Found
      </p>
      <NuxtLink
        class="basic-button"
        to="/"
      >
        回首頁
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
