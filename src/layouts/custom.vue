<script setup>
</script>

<template>
  <div class="custom-layout layout select-none">
    <!-- <Navbar /> -->
    <nav class="bg-red-400 flex-center">
      <div class="w-4/5 grid grid-cols-3 gap-4">
        <nuxt-link to="/" class="py-2">
          LOGO
        </nuxt-link>
        <div class="col-span-2 bg-red-600 text-white py-2 px-2">
          this is custom navbar
        </div>
      </div>
    </nav>
    <main class="w-4/5">
      <slot />
    </main>
    <footer class="bg-red-400 flex-center bg-red-600 text-white text-xl">
      this is custom footer
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.custom-layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  nav,
  footer {
    height: 6vh;
  }

  main {
    margin: auto;
    flex: auto;
    padding: 10px 0;
  }

  footer {
    height: 200px;
    flex-shrink: 0;
  }
}
</style>
