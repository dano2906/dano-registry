<script setup lang="ts">
import Typography from '~/registry/typhography/Typography.vue'

interface Props {
  dependencies: Dependency[]
  type?: 'shadcn' | 'lib'
  external?: boolean
}
const { type = 'shadcn', dependencies, external = true } = defineProps<Props>()
</script>

<template>
  <div class="w-full flex flex-row flex-wrap items-center justify-start gap-2">
    <Typography variant="span" :text="type === 'shadcn' ? 'Componentes de shadcn-vue:' : 'Dependencias externas:'" />
    <Badge v-for="(item, i) in dependencies" :key="i" :variant="type === 'shadcn' ? 'default' : 'secondary'" class="transition-transform hover:scale-105">
      <NuxtLink v-if="item.url" :to="item.url" :external :target="external ? '_blank' : '_self'">
        {{ item.text }}
      </NuxtLink>
      <Typography v-else variant="span" :text="item.text" />
    </Badge>
  </div>
</template>
