<script setup lang="ts">
import { Toaster } from "@/components/ui/sonner";
import "vue-sonner/style.css";
</script>

<template>
  <div class="w-full mx-auto container max-w-5xl font-inter">
    <slot />
  </div>
  <Toaster rich-colors />
</template>
