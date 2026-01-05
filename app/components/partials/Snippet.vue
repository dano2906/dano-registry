<script setup lang="ts">
import { Copy, CopyCheck } from 'lucide-vue-next'
import { ref } from 'vue'
import { toast } from 'vue-sonner'
import { Button } from '@/components/ui/button'

const { code } = defineProps<{
  code: string
}>()
const copied = ref(false)
async function copyCode() {
  try {
    await navigator.clipboard.writeText(code)
    copied.value = true
    toast.success('Copiado!', {
      position: 'top-right',
    })
    setTimeout(() => {
      copied.value = false
    }, 1000)
  }
  catch (err) {
    console.error('Error copiando el código', err)
  }
}
</script>

<template>
  <div class="relative w-full max-w-sm md:max-w-5xl">
    <pre
      class="bg-secondary text-secondary-foreground rounded overflow-x-auto p-2"
    ><code>{{ code }}</code></pre>

    <Button
      variant="secondary"
      size="icon-sm"
      class="absolute right-2 -top-1.5 bg-muted text-muted-foreground border border-accent-foregrund shadow"
      @click="copyCode"
    >
      <Copy v-if="!copied" />
      <CopyCheck v-else />
    </Button>
  </div>
</template>
