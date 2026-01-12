<script lang="ts" setup>
import AsyncMultiSelect from '@/registry/async-multi-select/AsyncMultiSelect.vue'

const registryDependenciesAsync = [
  { text: 'command' },
  { text: 'button' },
  { text: 'typhography', url: '#typography' },
  { text: 'loading-swap', url: '#loading-swap',
  },
]
const registryDependencies = [
  { text: 'command' },
  { text: 'button' },
  { text: 'typhography', url: '#typography' },
]
const selectedValues = ref<string[]>([])
const selectedAsyncValues = ref([])
const selectedAsyncValues2 = ref([])
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
  }, {
    text: 'Serbia',
    value: 'SE',
  }, {
    text: 'China',
    value: 'CN',
  }],
}]
</script>

<template>
  <PartialsSection component-name="multi-select" description="Select con posibilidad de seleccionar varias opciones." title="Multi Select" :registry-dependencies>
    <template #example>
      <div class="flex flex-row flex-wrap items-start justify-start gap-2">
        <MultiSelect v-model="selectedValues" :data class="w-full max-w-xs" />
      </div>
    </template>
  </PartialsSection>
  <PartialsSection component-name="async-multi-select" description="Select con posibilidad de seleccionar varias opciones desde una url asíncronamente." title="Multi Select Asíncrono" :registry-dependencies="registryDependenciesAsync">
    <template #example>
      <div class="flex flex-row flex-wrap items-start justify-start gap-2">
        <AsyncMultiSelect v-model="selectedAsyncValues" url="https://dummyjson.com/products" source-key="products" k="id" v="title" class="w-full max-w-xs" />
        <AsyncMultiSelect v-model="selectedAsyncValues2" url="https://jsonplaceholder.typicode.com/todos" k="id" v="title" class="w-full max-w-xs" />
      </div>
    </template>
  </PartialsSection>
</template>
