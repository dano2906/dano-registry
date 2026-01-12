<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
import Typography from '@/registry/typhography/Typography.vue'
import 'vue-sonner/style.css'
</script>

<template>
  <div class="w-full mx-auto container max-w-5xl font-inter py-8">
    <header class="flex items-center justify-between">
      <Typography variant="h1" text="Dano Registry" />
      <PartialsThemeSelector />
    </header>
    <slot />
  </div>
  <Toaster rich-colors />
</template>
