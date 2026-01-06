<script setup lang="ts">
const { min, max, step, condition } = defineProps<{
  min?: number
  max?: number
  step?: number
  condition?: (value: number) => boolean
}>()

const field = defineModel<number | undefined>({
  set: (v) => {
    const value = typeof v === 'number' ? v : Number(v)
    if (Number.isNaN(value))
      return undefined
    if (typeof min === 'number' && value < min)
      return undefined
    if (typeof max === 'number' && value > max)
      return undefined
    if (condition && !condition(value))
      return undefined
    return value
  },
})
</script>

<template>
  <Input
    v-model.number="field"
    type="number"
    :min
    :max
    :step
  />
</template>
