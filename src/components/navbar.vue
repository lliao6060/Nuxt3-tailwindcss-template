<script setup lang="ts">
const isMenuShow = ref<boolean>(false)

const toggleMenu = (): void => {
  isMenuShow.value = !isMenuShow.value
}
</script>

<template>
  <header class="bg-sky-600">
    <nav
      class="
        xl:w-4/5
        md:w-full
        flex
        flex-wrap
        items-center
        justify-between
        mx-auto
        py-2
        px-4
      "
    >
      <div>
        <NuxtLink to="/">
          <div class="d-block">
            <img
              src="~/assets/images/maju.jpeg"
              class="max-h-[6vh] rounded-md"
            >
          </div>
        </NuxtLink>
      </div>
      <div>
        <div class="flex space-x-4">
          <div
            class="
              w-full
              hidden
              xl:flex-center
            "
          >
            <NavbarMenuList />
          </div>
          <NavbarLanguageChange />
          <NavbarThemeChange />
          <div
            class="xl:hidden md:flex-center"
            @click="toggleMenu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-full w-6 cursor-pointer flex-center"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
    <div
      class="
        w-full
        md:items-center
        md:w-auto
        xl:hidden
        h-0 transition-all ease-out duration-500
      "
      :class="{ 'h-48': isMenuShow }"
    >
      <NavbarMenuList />
    </div>
  </header>
</template>

<style lang="scss" scoped>

</style>
