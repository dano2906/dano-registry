<script setup lang="ts">
import { Spinner } from '@/components/ui/spinner'

interface Props {
  isLoading: boolean
  className?: string
}

const { isLoading, className } = defineProps<Props>()

const contentClasses = computed(() => [
  'col-start-1 col-end-2 row-start-1 row-end-2 w-full',
  isLoading ? 'invisible' : 'visible',
  className,
])

const loaderClasses = computed(() => [
  'col-start-1 col-end-2 row-start-1 row-end-2',
  isLoading ? 'visible' : 'invisible',
  className,
])
</script>

<template>
  <div class="grid grid-cols-1 items-center justify-items-center">
    <div :class="contentClasses">
      <slot />
    </div>

    <div :class="loaderClasses">
      <Spinner />
    </div>
  </div>
</template>
