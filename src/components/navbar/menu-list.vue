<script setup lang="ts">
</script>

<template>
  <ul
    class="
      text-base text-gray-700
      xl:flex
      xl:justify-between
      md:pt-0
      text-center
      text-white
      dark:text-gray-900
    "
  >
    <li
      v-for="(menuItem, i) in 4"
      :key="`menuItem-${i}`"
      class="md:text-lg"
    >
      <a
        class="md:p-4 py-2 block hover:text-indigo-300" href="#"
      >Item{{ i + 1 }}</a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>

</style>
