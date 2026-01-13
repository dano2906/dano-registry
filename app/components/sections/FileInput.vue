<script lang="ts" setup>
import File from '@/registry/file-input/FileInput.vue'

const files = ref([])

const registryDependencies = [{
  text: 'button',
}]
</script>

<template>
  <PartialsSection id="file-input" component-name="file-input" description="Componente para subir archivo." title="File Input" :registry-dependencies>
    <template #example>
      <div class="flex flex-col flex-wrap items-start justify-start gap-2">
        <File v-model="files" />
      </div>
    </template>
  </PartialsSection>
</template>
