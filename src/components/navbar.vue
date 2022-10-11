<script setup>
</script>

<template>
  <nav class="bg-sky-300 flex-center">
    <div class="grid grid-cols-2 gap-4 w-4/5 mx-auto">
      <div class="w-full h-full">
        <NuxtLink to="/" class="h-full flex items-center justify-start">
          LOGO
        </NuxtLink>
      </div>
      <div class="w-full h-full flex items-center justify-end">
        <div class="w-1/6">
          <div class="flex space-x-2">
            <NavbarLanguageChange />
            <NavbarColorChange />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>

</style>
