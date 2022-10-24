<script setup>
const counter = useState('counter', () => 0)
</script>

<template>
  <div class="py-24">
    <div class="flex flex-col items-center">
      <span class="text-9xl font-semibold text-sky-600">{{ counter }}</span>
      <div class="mt-8 flex flex-row">
        <button
          class="basic-button"
          @click="counter++"
        >
          增加
        </button>
        <button
          class="basic-button"
          @click="counter--"
        >
          減少
        </button>
      </div>
      <p class="mt-4 text-slate-500 dark:text-white">
        如果是第一次進入這個頁面，數值初始設定為 0
      </p>
      <div class="mt-8">
        <NuxtLink to="/">
          回首頁
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
