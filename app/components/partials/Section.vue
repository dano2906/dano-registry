<script setup lang="ts">
const { title, description, componentName, dependencies = [], registryDependencies = [] } = defineProps<{
  title: string
  description: string
  componentName: string
  dependencies?: Dependency[]
  registryDependencies?: Dependency[]
}>()
</script>

<template>
  <section class="w-full space-y-6">
    <PartialsTypography variant="h2" :text="title" />
    <PartialsTypography variant="p" :text="description" />
    <PartialsDependenciesGroup v-if="dependencies && dependencies.length > 0" :dependencies type="lib" />
    <PartialsDependenciesGroup v-if="registryDependencies && registryDependencies.length > 0" :dependencies="registryDependencies" type="shadcn" />
    <PartialsSnippet
      :code="`pnpm dlx shadcn-vue@latest add https://dano-registry.vercel.app/r/${componentName}.json`"
    />
    <slot name="example" />
  </section>
</template>
