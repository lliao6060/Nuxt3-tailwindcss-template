<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface IconProps {
  icon?: string
  size?: number | string
  color?: string
}

const props = withDefaults(defineProps<IconProps>(), {
  size: 20,
})

const fontSize = computed(() => {
  return `${props.size}px`
})

const styles = computed(() => {
  return {
    fontSize: fontSize.value,
    color: props.color ? props.color : 'inherit',
  }
})
</script>

<template>
  <Icon
    :icon="props.icon"
    :style="styles"
  />
</template>

<style lang="scss" scoped>

</style>
