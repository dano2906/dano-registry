<script setup lang="ts">
import { Paintbrush } from 'lucide-vue-next'

const colorMode = useColorMode()
</script>

<template>
  <NativeSelect v-model="colorMode.preference" :default-icon="false" class="z-50">
    <template #icon>
      <Paintbrush
        class="text-primary pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 opacity-50 select-none"
        aria-hidden="true"
        data-slot="native-select-icon"
      />
    </template>
    <NativeSelectOption value="system">
      System
    </NativeSelectOption>
    <NativeSelectOption value="dark">
      Dark
    </NativeSelectOption>
    <NativeSelectOption value="light">
      Light
    </NativeSelectOption>
    <NativeSelectOption value="sea">
      Sea
    </NativeSelectOption>
    <NativeSelectOption value="forest">
      Forest
    </NativeSelectOption>
    <NativeSelectOption value="volcanic">
      Volcanic
    </NativeSelectOption>
  </NativeSelect>
</template>
