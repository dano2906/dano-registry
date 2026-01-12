<script setup lang="ts">
import Typography from '@/registry/typhography/Typography.vue'

const isFixed = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isFixed.value = window.scrollY > 20
  })
})
</script>

<template>
  <header class="flex items-center justify-between w-full mx-auto container max-w-5xl rounded-md p-2" :class="[isFixed && 'fixed z-50 bg-muted/80 backdrop-blur-sm']">
    <Typography variant="h1" text="Dano Registry" />
    <PartialsThemeSelector />
  </header>
</template>
