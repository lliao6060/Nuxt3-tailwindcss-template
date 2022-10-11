<script setup lang="ts">
const title = ref<string | any>('different layout Page')
const description = ref<string>('different layout Page Description')
useHead({
  title,
  meta: [{
    name: 'description',
    content: description,
  }],
})
definePageMeta({
  layout: 'custom', // set false will remove layout
})
</script>

<template>
  <div>hello</div>
</template>

