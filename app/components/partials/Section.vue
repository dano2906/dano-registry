<script setup lang="ts">
import Typography from '~/registry/typhography/Typography.vue'

const { title, description, componentName, dependencies = [], registryDependencies = [], id = undefined } = defineProps<{
  title: string
  description: string
  componentName: string
  dependencies?: Dependency[]
  registryDependencies?: Dependency[]
  id?: string
}>()
</script>

<template>
  <section :id class="w-full space-y-6">
    <Typography variant="h2" :text="title" />
    <Typography variant="p" :text="description" />
    <PartialsDependenciesGroup v-if="dependencies && dependencies.length > 0" :dependencies type="lib" />
    <PartialsDependenciesGroup v-if="registryDependencies && registryDependencies.length > 0" :dependencies="registryDependencies" type="shadcn" :external="false" />
    <PartialsSnippet
      :code="`pnpm dlx shadcn-vue@latest add https://dano-registry.vercel.app/r/${componentName}.json`"
    />
    <slot name="example" />
  </section>
</template>
