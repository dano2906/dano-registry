<script setup lang="ts">
import Header from '@/components/partials/Header.vue'
import { Toaster } from '@/components/ui/sonner'
import 'vue-sonner/style.css'
</script>

<template>
  <div class="w-full mx-auto container max-w-5xl font-inter py-8 px-2 relative">
    <Header />
    <slot />
  </div>
  <Toaster rich-colors />
</template>
