<script setup>

</script>

<template>
  <div>
    <p>{{ $route.params.group }} - {{ $route.params.id }}</p>
    <br>
    <NuxtLink
      to="/"
      class="py-2 px-3 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-cyan-500/50 focus:outline-none"
    >
      Back Home
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>

</style>
