<script setup lang="ts">
import { Plus } from 'lucide-vue-next'

async function actionError() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return { ok: false, message: 'Something went wrong' }
}

async function actionSuccess() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return { ok: true }
}

const dependencies = [
  { text: 'vue-sonner', url: 'https://vue-sonner.vercel.app/' },
]

const registryDependencies = [
  { text: 'button' },
  { text: 'spinner' },
  { text: 'dialog' },
  { text: 'sonner' },
]
</script>

<template>
  <PartialsSection component-name="action-button" description="Un botón para ejecutar acciones capaz de manejar confirmación y errores." title="Boton de acción" :dependencies :registry-dependencies>
    <template #example>
      <div class="flex flex-wrap items-center justify-start gap-0.5">
        <ActionButton :action="actionError" require-are-you-sure>
          <template #text>
            With Dialog with Error
          </template>
          <template #icon>
            <Plus />
          </template>
        </ActionButton>
        <ActionButton :action="actionSuccess" require-are-you-sure>
          <template #text>
            With Dialog without Error
          </template>
          <template #icon>
            <Plus />
          </template>
        </ActionButton>
        <ActionButton :action="actionError">
          <template #text>
            Without Dialog with Error
          </template>
          <template #icon>
            <Plus />
          </template>
        </ActionButton>
        <ActionButton :action="actionSuccess">
          <template #text>
            Without Dialog without Error
          </template>
          <template #icon>
            <Plus />
          </template>
        </ActionButton>
        <ActionButton :action="actionSuccess">
          <template #icon>
            <Plus />
          </template>
        </ActionButton>
      </div>
    </template>
  </PartialsSection>
</template>
