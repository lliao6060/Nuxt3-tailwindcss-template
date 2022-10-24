<script setup lang="ts" name="User">
const route = useRoute()
const title = ref<string | any>('User Page')
const description = ref<string>('User Page Description')
useHead({
  title,
  meta: [{
    name: 'description',
    content: description,
  }],
})

const updateTitleAndDescription = (): void => {
  title.value = `User ${route.params.group} Page`
  description.value = `User ${route.params.group} Page Description`
}

watch(() => route.params, () => updateTitleAndDescription())
</script>

<template>
  <div>
    <h1 class="text-xl">
      User Page(Dynamic params page)
    </h1>
    <div class="flex space-x-2">
      <NuxtLink to="/user/users-admins/123" class="basic-tab-button bg-cyan-500 shadow-cyan-500/50">
        Go /users-admins/123
      </NuxtLink>
      <NuxtLink to="/user/users-permission/123" class="basic-tab-button bg-blue-500 shadow-blue-500/50">
        Go /users-permission/123
      </NuxtLink>
      <NuxtLink to="/user/users-settings/123" class="basic-tab-button bg-indigo-500 shadow-indigo-500/50">
        Go /users-settings/123
      </NuxtLink>
    </div>

    <NuxtChild />
  </div>
</template>

<style lang="postcss">
  body {
    @apply bg-gray-50 dark:bg-gray-800;
  }
  .global-text {
    @apply text-gray-900 dark:text-gray-50;
  }
  </style>
