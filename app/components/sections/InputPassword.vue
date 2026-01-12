<script lang="ts" setup>
import InputPassword from '~/registry/input-password/InputPassword.vue'
import Typography from '~/registry/typhography/Typography.vue'

const pass = ref('')

const registryDependencies = [
  { text: 'input-group' },
]
</script>

<template>
  <PartialsSection component-name="input-password" description="Un campo de texto con un boton para mostrar/ocultar la contraseña." title="Input de contraseña" :registry-dependencies>
    <template #example>
      <div class="flex flex-row flex-wrap items-center justify-start gap-2">
        <Typography variant="span" :text="`Su contraseña es: ${pass}`" />
        <InputPassword v-model="pass" placeholder="Password" class="max-w-xs" />
      </div>
    </template>
  </PartialsSection>
</template>
