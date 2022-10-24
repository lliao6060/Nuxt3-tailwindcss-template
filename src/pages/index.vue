<script setup lang="ts" name="Index">
import type { ListItem } from '~/common/types'
import { demoComponents } from '~/static'
import { apiFetch } from '~/server/api'

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
const getList = async () => {
  const res = await apiFetch('list')

  if (res.data)
    apiData.value = res.data.list
}

const getNameAndGreeting = async () => {
  const res = await apiFetch('greeting', {
    params: { name: 'maju' },
  })

  console.log(res)
}

onMounted(async () => {
  const apiList = [getList(), getNameAndGreeting()]
  await Promise.all(apiList)
})

// console.log(import.meta.env)
</script>

<template>
  <div class="w-full mx-auto text-center align-center">
    <h1 class="title">
      {{ t('hello') }}
    </h1>
    <p>{{ $i18n.locale }}</p>
    <!-- <p>
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
    </div> -->
  </div>
</template>
