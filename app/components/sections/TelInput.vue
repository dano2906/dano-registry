<script lang="ts" setup>
import TelInput from '@/registry/tel-input/TelInput.vue'
import Typography from '~/registry/typhography/Typography.vue'

const phone = ref(undefined)

const dependencies = [
  { text: 'libphonenumber-js', url: 'https://www.npmjs.com/package/libphonenumber-js' },
  { text: 'vueuse', url: 'https://vueuse.org/' },
]

const registryDependencies = [
  { text: 'input' },
  { text: 'button' },
]
</script>

<template>
  <PartialsSection component-name="tel-input" description="Componente para seleccionar números telefónicos." title="Tel Input" :registry-dependencies :dependencies>
    <template #example>
      <div class="flex flex-col flex-wrap items-start justify-start gap-2">
        <Typography variant="span" :text="`Su teléfono es: ${phone ?? ''}`" />
        <TelInput v-model="phone" placeholder="+53 5 5375856" />
      </div>
    </template>
  </PartialsSection>
</template>
