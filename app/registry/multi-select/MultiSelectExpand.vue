<script setup lang="ts">
import { ArrowDown, ArrowUp } from 'lucide-vue-next'

const open = defineModel<boolean>({
  default: false,
})
</script>

<template>
  <Button class="absolute top-1 right-1" size="icon-xs" @click="() => open = !open">
    <component :is="open ? ArrowUp : ArrowDown" class="text-primary-foreground cursor-pointer" />
  </Button>
</template>
