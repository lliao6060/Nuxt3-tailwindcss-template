<script setup>
</script>

<template>
  <div id="default-layout" class="layout select-none">
    <Navbar />
    <main
      class="
      w-full
      md:w-11/12
      xl:w-4/5
      mx-auto
      text-xl-lg
    "
    >
      <slot />
    </main>
    <footer class="bg-sky-600 flex-center text-2xl text-white">
      footer
    </footer>
  </div>
</template>

<style lang="scss" scoped>
#default-layout {
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
    height: 100px;
    flex-shrink: 0;
  }
}
</style>
