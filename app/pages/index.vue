<script setup lang="ts">
definePageMeta({
  layout: "default",
  name: "index",
});
</script>

<template>
  <main class="w-full py-4">
    <PartialsTypography variant="h1" text="Dano Registry" />
    <section class="w-full space-y-4">
      <PartialsTypography variant="h2" text="Action button" />
      <PartialsSnippet
        code="pnpm dlx shadcn-vue@latest add https://dano-registry.vercel.app/r/action-button.json"
      />
    </section>
  </main>
</template>
