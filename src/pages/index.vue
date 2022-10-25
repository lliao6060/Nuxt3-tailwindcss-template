<script setup lang="ts" name="Index">
const { t } = useLang()
const title = ref<string | any>('Index Page')
const description = ref<string>('Index Page Description')
useHead({
  title,
  meta: [{
    name: 'description',
    content: description,
  }],
})
definePageMeta({
  middleware: ['test'],
})
/* eslint-disable no-console */
const { $hello } = useNuxtApp()
console.log($hello('maju'))
</script>

<template>
  <div class="w-full mx-auto text-center align-center">
    <h1 class="title">
      {{ t('hello') }}
    </h1>
    <p>{{ $i18n.locale }}</p>
  </div>
</template>
