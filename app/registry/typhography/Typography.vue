<script setup lang="ts">
type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'blockquote'

const { variant, text } = defineProps<{ variant: Variant, text: string }>()

const data = {
  h1: 'scroll-m-20 text-center text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-balance',
  h2: 'scroll-m-20 border-b pb-2 text-xl sm:text-3xl md:text-4xl font-semibold tracking-tight transition-colors first:mt-0',
  h3: 'scroll-m-20 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight',
  h4: 'scroll-m-20 text-lg sm:text-xl md:text-2xl font-semibold tracking-tight',
  p: 'leading-7 text-base sm:text-base md:text-lg [&:not(:first-child)]:mt-6',
  span: 'text-xs sm:text-sm md:text-base font-medium leading-none',
  blockquote: 'mt-6 border-l-2 pl-6 italic text-base sm:text-base md:text-lg',
}
</script>

<template>
  <component :is="variant" :class="data[variant]">
    {{ text }}
  </component>
</template>
