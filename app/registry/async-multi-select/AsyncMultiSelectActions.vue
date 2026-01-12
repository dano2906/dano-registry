<script setup lang="ts">
import { ArrowDown, ArrowUp, CheckSquare, CheckSquare2 } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const { selected, marked } = defineProps<{
  selected: number
  marked: boolean
}>()

const emit = defineEmits<{
  (e: 'mark', value: boolean): void
}>()

const open = defineModel<boolean>({
  default: false,
})
</script>

<template>
  <div class="absolute top-1 right-1 flex flex-col items-center justify-center gap-1">
    <Button v-if="selected > 1" size="icon-xs" @click="() => open = !open">
      <component :is="open ? ArrowUp : ArrowDown" class="text-primary-foreground cursor-pointer" />
    </Button>
    <Button v-if="open && selected > 2" size="icon-xs" class="text-xs text-primary-foreground/70 px-1">
      {{ selected }}
    </Button>
    <Button v-if="open && selected > 3" size="icon-xs" class="text-xs text-primary-foreground/70 p-0.5" @click="emit('mark', !marked)">
      <component :is="marked ? CheckSquare : CheckSquare2" class="text-primary-foreground cursor-pointer size-3" />
    </Button>
  </div>
</template>
