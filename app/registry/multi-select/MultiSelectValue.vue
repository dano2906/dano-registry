<script setup lang="ts">
import { X } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const { item, withRemove = true, onRemove } = defineProps<{
  item: MultiSelectItemProp
  withRemove?: boolean
  onRemove: (value: string) => void
}>()
</script>

<template>
  <Button class="flex items-center justify-between gap-2 rounded-full text-xs p-0 m-0 h-6 max-w-full" size="sm" @click="onRemove(item.value)">
    <span class="truncate">{{ item.text }}</span>
    <X v-if="withRemove" class="text-primary-foreground cursor-pointer" />
  </Button>
</template>
