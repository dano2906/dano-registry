<script setup lang="ts" generic="T extends Record<PropertyKey, any>">
import { X } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const { item, withRemove = true } = defineProps<{
  item: T
  v: keyof T
  withRemove?: boolean
}>()

const emit = defineEmits<{
  (e: 'onRemove'): void
}>()
</script>

<template>
  <Button class="flex items-center justify-between gap-2 rounded-full text-xs p-0 m-0 h-6  max-w-full" size="sm" @click="emit('onRemove')">
    <span class="truncate">{{ item[v] }}</span>
    <X v-if="withRemove" class="text-primary-foreground cursor-pointer" />
  </Button>
</template>
