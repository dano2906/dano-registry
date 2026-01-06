<script lang="ts" setup>
import InputPassword from '~/registry/input-password/InputPassword.vue'

const pass = ref('')
</script>

<template>
  <section class="w-full space-y-4">
    <PartialsTypography variant="h2" text="Input password" />
    <PartialsSnippet
      code="pnpm dlx shadcn-vue@latest add https://dano-registry.vercel.app/r/input-password.json"
    />
    <div class="flex flex-row flex-wrap items-center justify-start gap-2">
      <PartialsTypography variant="span" :text="`Su contraseña es: ${pass}`" />
      <InputPassword v-model="pass" placeholder="Password" class="max-w-xs" />
    </div>
  </section>
</template>
