<script setup lang="ts">
const { type = 'shadcn', dependencies } = defineProps<{
  dependencies: string[]
  type?: 'shadcn' | 'lib'
}>()
</script>

<template>
  <div class="w-full flex flex-row flex-wrap items-center justify-start gap-2">
    <Badge v-for="(item, i) in dependencies" :key="i" :variant="type === 'shadcn' ? 'default' : 'secondary'">
      {{ item }}
    </Badge>
  </div>
</template>
