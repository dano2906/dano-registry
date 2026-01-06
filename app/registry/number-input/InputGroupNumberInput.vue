<script setup lang="ts">
import { cn } from '@/lib/utils'
import NumberInput from './NumberInput.vue'

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <NumberInput
    v-bind="$attrs"
    data-slot="input-group-control"
    :class="
      cn(
        'flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent',
        props.class,
      )
    "
  />
</template>
