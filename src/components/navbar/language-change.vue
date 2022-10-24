<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import { useI18n } from 'vue-i18n'
import { availableLocales } from '~/locales/availableLocales'

const { locale } = useI18n()

const localeUserSetting = useCookie('locale')
watch(localeUserSetting, () => {
  locale.value = localeUserSetting.value
})
</script>

<template>
  <div class="flex-center">
    <Listbox
      v-model="localeUserSetting"
      as="div"
      class="relative flex items-center"
    >
      <ListboxLabel class="sr-only">
        Theme
      </ListboxLabel>
      <ListboxButton type="button" title="Change Language">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700"
        >
          <Icon icon="fa6-solid:language" />
        </div>
      </ListboxButton>
      <ListboxOptions class="list-box-options">
        <ListboxOption
          v-for="lang in availableLocales"
          :key="lang.iso"
          :value="lang.iso"
          class="flex w-full cursor-pointer items-center justify-between py-2 px-3"
          :class="{
            'text-white-500 bg-gray-200 dark:bg-gray-500/50':
              localeUserSetting === lang.iso,
            'hover:bg-gray-200 dark:hover:bg-gray-700/30':
              localeUserSetting !== lang.iso,
          }"
        >
          <span class="truncate">
            {{ lang.name }}
          </span>
          <span class="flex items-center justify-center text-sm">
            <Icon :icon="lang.flag" class="text-base" />
          </span>
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
  </div>
</template>
