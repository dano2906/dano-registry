<script lang="ts" setup>
const isLoading = ref(false)

async function action() {
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  isLoading.value = false
}

const registryDependencies = [
  { text: 'spinner' },
]
</script>

<template>
  <PartialsSection component-name="loading-swap" description="Envoltorio para manejar estados de carga sin cambiar las dimensiones del componente." title="Loading Swap" :registry-dependencies>
    <template #example>
      <div class="flex flex-col flex-wrap items-start justify-start gap-2">
        <Button @click="action">
          <LoadingSwap :is-loading="isLoading">
            Realizar acción
          </LoadingSwap>
        </Button>
        <div class="w-full h-24 bg-secondary text-primary rounded-lg grid place-content-center">
          <LoadingSwap :is-loading="isLoading">
            <PartialsTypography variant="span" text="Loading Swap" />
          </LoadingSwap>
        </div>
      </div>
    </template>
  </PartialsSection>
</template>
