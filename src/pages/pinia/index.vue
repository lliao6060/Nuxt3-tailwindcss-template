<script setup lang="ts" name="Pinia">
import { useAppStore } from '~~/src/store/app'

const counter = useAppStore()
const title = ref<string | any>('Pinia Page')
const description = ref<string>('Pinia Page Description')
useHead({
  title,
  meta: [{
    name: 'description',
    content: description,
  }],
})
</script>

<template>
  <div>
    <NuxtLink to="/" class="basic-shadow-button">
      Back Home
    </NuxtLink>
    <div class="global-text">
      <pre>{{ counter.$state }}</pre>
      <p>
        N: {{ counter.n }}
        <br>
        myRef: {{ counter.myRef }}
      </p>

      <input v-model="counter.myRef" class="text-black" type="text">
      <br>
      <input v-model="counter.n" class="text-black" type="number">
    </div>
    <button class="global-text p-4" @click="counter.increment()">
      +1 number click
    </button>
  </div>
</template>
