<script setup lang="ts">
import type { Dependency } from '#shared/app'

interface Props {
  dependencies: Dependency[]
  type?: 'shadcn' | 'lib'
}
const { type = 'shadcn', dependencies } = defineProps<Props>()
</script>

<template>
  <div class="w-full flex flex-row flex-wrap items-center justify-start gap-2">
    <PartialsTypography variant="span" :text="type === 'shadcn' ? 'Componentes de shadcn-vue:' : 'Dependencias externas:'" />
    <Badge v-for="(item, i) in dependencies" :key="i" :variant="type === 'shadcn' ? 'default' : 'secondary'" class="transition-transform hover:scale-105">
      <NuxtLink v-if="item.url" :to="item.url" external target="_blank">
        {{ item.text }}
      </NuxtLink>
      <PartialsTypography v-else variant="span" :text="item.text" />
    </Badge>
  </div>
</template>
