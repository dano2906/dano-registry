<script lang="ts" setup>
const registryDependencies = [
  { text: 'spinner' },
]

const selectedValues = ref<string[]>([])

const data = [{
  heading: 'Opciones',
  items: [{
    text: 'Argentina',
    value: 'AR',
  }, {
    text: 'Cuba',
    value: 'CU',
  }, {
    text: 'México',
    value: 'MX',
  }, {
    text: 'España',
    value: 'ES',
  }, {
    text: 'Rusia',
    value: 'RU',
  }, {
    text: 'Angola',
    value: 'AN',
  }, {
    text: 'India',
    value: 'ID',
  }],
}]
</script>

<template>
  <PartialsSection component-name="multi-select" description="Select con posibilidad de seleccionar varias opciones." title="Multi Select" :registry-dependencies>
    <template #example>
      <div class="flex flex-col flex-wrap items-start justify-start gap-2">
        <MultiSelect v-model="selectedValues" :data class="w-full max-w-xs" />
      </div>
    </template>
  </PartialsSection>
</template>
