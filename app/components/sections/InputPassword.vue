<script lang="ts" setup>
import InputPassword from '~/registry/input-password/InputPassword.vue'

const pass = ref('')
</script>

<template>
  <PartialsSection component-name="input-password" description="Un campo de texto con un boton para mostrar/ocultar la contraseña." title="Input de contraseña" :registry-dependencies="['input-group']">
    <template #example>
      <div class="flex flex-row flex-wrap items-center justify-start gap-2">
        <PartialsTypography variant="span" :text="`Su contraseña es: ${pass}`" />
        <InputPassword v-model="pass" placeholder="Password" class="max-w-xs" />
      </div>
    </template>
  </PartialsSection>
</template>
