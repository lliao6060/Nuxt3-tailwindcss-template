<script setup lang="ts">
import { demoPageList } from '~/static'
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
    >
      <NuxtLink
        :key="menuItem.path"
        :to="`/${menuItem.path}`"
        class="md:p-4 py-2 block hover:text-indigo-300"
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
