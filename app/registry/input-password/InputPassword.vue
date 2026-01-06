<script setup lang="ts">
import { Eye, EyeClosed } from 'lucide-vue-next'

const { placeholder } = defineProps<{
  placeholder?: string | undefined
}>()

const field = defineModel<string | undefined>(undefined)

const type = ref('password')

function reverse() {
  type.value = type.value === 'password' ? 'text' : 'password'
}
</script>

<template>
  <InputGroup>
    <InputGroupInput v-model="field" :placeholder :type="type" />
    <InputGroupAddon align="inline-end">
      <InputGroupButton
        :aria-label="type === 'password' ? 'Show password' : 'Hide password'"
        :title="type === 'password' ? 'Show password' : 'Hide password'"
        size="icon-xs"
        @click="reverse"
      >
        <Eye v-if="type === 'password'" />
        <EyeClosed v-if="type === 'text'" />
      </InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
</template>
