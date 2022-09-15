<script setup lang="ts">
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

const apiData = ref<any[]>([])

// fetch data from server/api
const res: any = await useAsyncData('list', () => $fetch('/api/return-list'))
const { result } = res.data.value
apiData.value = result.list

const { data } = await useAsyncData('api/return-name', () => {
  return $fetch('/api/return-name', {
    params: {
      name: 'maju',
    },
  })
})

console.log(data)
</script>

<template>
  <div>
    <p class="text-red-600 dark:text-red-200">
      {{ t("hello") }}
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
        <NuxtLink to="/components-demo/menu" class="basic-button">
          <p class="flex-center">
            Menu
          </p>
        </NuxtLink>
        <NuxtLink to="/components-demo/modal" class="basic-button">
          <p class="flex-center">
            Modal
          </p>
        </NuxtLink>
        <NuxtLink to="/components-demo/tabs" class="basic-button">
          <p class="flex-center">
            Tabs
          </p>
        </NuxtLink>
      </div>
    </div>

    <div>
      <h3 class="text-xl font-bold py-4">
        Page Demos
      </h3>
      <div class="grid grid-cols-3 gap-4">
        <NuxtLink to="/pinia" class="basic-button">
          <p class="flex-center">
            Pinia
          </p>
        </NuxtLink>
        <NuxtLink to="/parent" class="basic-button">
          <p class="flex-center">
            Parent
          </p>
        </NuxtLink>
        <NuxtLink to="/users-admins/123" class="basic-button">
          <p class="flex-center">
            Dynamic params page (/users-admins/123)
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
