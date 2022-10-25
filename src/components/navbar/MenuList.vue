<script setup lang="ts">
import { demoPageList } from '~/static'
const emit = defineEmits(['onNavItemClick'])
</script>

<template>
  <ul
    class="
      text-base
      xl:flex
      xl:justify-between
      md:pt-0
      text-center
      text-white
    "
  >
    <li
      v-for="(menuItem, i) in demoPageList"
      :key="`menuItem-${i}`"
      class="md:text-lg"
      :class="{ 'bg-sky-400 dark:bg-gray-800': $route.name === menuItem.value }"
      @click="emit('onNavItemClick')"
    >
      <NuxtLink
        :key="menuItem.path"
        :to="`/${menuItem.path}`"
        class="md:p-4 py-2 block font-bold hover:text-sky-200 dark:hover:text-indigo-300"
      >
        <p class="flex-center">
          {{ menuItem.name }}
        </p>
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>

</style>
