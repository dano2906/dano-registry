<script setup lang="ts">
import { ChevronUp } from 'lucide-vue-next'

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const isVisible = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isVisible.value = window.scrollY > 40
  })
})
</script>

<template>
  <Button class="fixed bottom-6 right-6 p-1 z-50 rounded-full shadow" variant="default" size="icon-lg" :class="[isVisible ? 'block' : 'hidden']" v @click="scrollToTop">
    <ChevronUp class="size-full" />
  </Button>
</template>
