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
</script>

<template>
  <section class="w-full space-y-4">
    <PartialsTypography variant="h2" text="Action button" />
    <PartialsSnippet
      code="pnpm dlx shadcn-vue@latest add https://dano-registry.vercel.app/r/action-button.json"
    />
    <div class="flex flex-wrap items-center justify-center gap-0.5">
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
  </section>
</template>
