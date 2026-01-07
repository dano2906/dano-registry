<script setup lang="ts">
import { Check } from 'lucide-vue-next'

const { item, checked } = defineProps<{
  item: MultiSelectItemProp
  checked: boolean
}>()

const emit = defineEmits<{
  (e: 'select', value: string): void
}>()
</script>

<template>
  <CommandItem :key="item.value" :value="item.value" class="min-h-7" @select="emit('select', item.value)">
    <Check v-if="checked" class="text-primary-foreground" />
    <PartialsTypography variant="span" :text="item.text" :class="[checked ? 'ml-0' : 'ml-6']" />
  </CommandItem>
</template>
