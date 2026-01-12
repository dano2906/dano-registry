<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import Spinner from '@/components/ui/spinner/Spinner.vue'
import { useConfirmAction } from '@/registry/action-button/useConfirmAction'

type ActionResult = { ok: true } | { ok: false, message?: string }

type MaybePromise<T> = T | Promise<T>

interface Props<T extends ActionResult = ActionResult> {
  action: () => MaybePromise<T>
  requireAreYouSure?: boolean
  couldCloseAutomatically?: boolean
  toastOptions?: {
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  }
  dialogOptions?: {
    title?: string
    description?: string
    cancelButtonText?: string
    confirmButtonText?: string
  }
}

const {
  action,
  requireAreYouSure = false,
  couldCloseAutomatically = true,
  toastOptions = {
    position: 'bottom-right',
  },
  dialogOptions = {
    title: '¿Está seguro que desea realizar esta acción?',
    description: 'Esta acción no se puede deshacer.',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Confirmar',
  },
} = defineProps<Props>()

const { isLoading, openDialog, onPrimaryClick, onConfirm, onCancel }
  = useConfirmAction(action, {
    requireAreYouSure,
    couldCloseAutomatically,
    toastOptions,
  })
</script>

<template>
  <Button :disabled="isLoading" @click="onPrimaryClick">
    <slot name="text" />
    <Spinner v-if="isLoading && !requireAreYouSure" />
    <slot v-else name="icon" />
  </Button>
  <Dialog v-model:open="openDialog">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{{ dialogOptions?.title ?? "¿Está seguro que desea realizar esta acción?" }}</DialogTitle>
        <DialogDescription>
          {{ dialogOptions?.description ?? "Esta acción no se puede deshacer." }}
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button variant="secondary" class="mr-2" @click="onCancel">
          {{ dialogOptions?.cancelButtonText ?? "Cancelar" }}
        </Button>
        <Button variant="destructive" class="min-w-28" @click="onConfirm">
          <Spinner v-if="isLoading" />
          <span v-else>{{
            dialogOptions?.confirmButtonText ?? "Confirmar"
          }}</span>
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
