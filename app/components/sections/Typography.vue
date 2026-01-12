<script lang="ts" setup>
import Typography from '@/registry/typhography/Typography.vue'
</script>

<template>
  <PartialsSection component-name="typography" description="Un componente para mostrar textos en pantalla con diferentes estilos." title="Tipografía">
    <template #example>
      <div class="flex flex-col flex-wrap items-start justify-start gap-2">
        <Typography variant="h1" text="H1" />
        <Typography variant="h2" text="H2" />
        <Typography variant="h3" text="H3" />
        <Typography variant="h4" text="H4" />
        <Typography variant="p" text="P" />
        <Typography variant="span" text="Span" />
        <Typography variant="blockquote" text="Blockquote" />
      </div>
    </template>
  </PartialsSection>
</template>
