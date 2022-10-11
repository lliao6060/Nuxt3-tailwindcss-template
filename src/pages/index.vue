<script setup lang="ts">
import type { ListItem } from '~/common/types'
import { demoComponents, demoPageList } from '~/static'

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

const apiData = ref<ListItem[]>([])

// fetch data from server/api
const res: any = await useAsyncData('list', () => $fetch('/api/return-list'))
const { result } = res.data.value
if (result)
  apiData.value = result.list

const { data } = await useAsyncData('api/return-name', () => {
  return $fetch('/api/return-name', {
    params: {
      name: 'maju',
    },
  })
})

console.log(data.value)
// console.log(import.meta.env)
</script>

<template>
  <div>
    <p class="text-red-600 dark:text-red-200">
      {{ t('hello') }}
    </p>
    <p>
      api data
      <code>{{ apiData }}</code>
    </p>

    <div>
      <h3 class="text-xl font-bold py-4">
        Components
      </h3>
      <div class="grid grid-cols-3 gap-4">
        <NuxtLink
          v-for="demoPageItem in demoComponents"
          :key="demoPageItem.path"
          :to="`/components-demo/${demoPageItem.path}`"
          class="basic-shadow-button"
        >
          <p class="flex-center">
            {{ demoPageItem.name }}
          </p>
        </NuxtLink>
      </div>
    </div>

    <div>
      <h3 class="text-xl font-bold py-4">
        Page Demos
      </h3>
      <div class="grid grid-cols-3 gap-4">
        <NuxtLink
          v-for="demoPageItem in demoPageList"
          :key="demoPageItem.path"
          :to="`/${demoPageItem.path}`"
          class="basic-shadow-button"
        >
          <p class="flex-center">
            {{ demoPageItem.name }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
