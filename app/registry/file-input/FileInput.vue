<script setup lang="ts">
import type { AcceptType, FilePreview } from './file-input'
import { Plus, Trash, Upload, X } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'
import { useFileInput } from './useFileInput'

const { multiple = true, accept = [], maxSize } = defineProps<{
  multiple?: boolean
  accept?: AcceptType[]
  maxSize?: number
}>()
const files = defineModel<FilePreview[]>({
  default: () => [],
})

const { buildAccept, clean, dragging, getFileKind, inputRef, onDrag, onDrop, onInput, onLeave, openPicker, removeFile, totalSize } = useFileInput(files, maxSize)
</script>

<template>
  <div
    class="w-full bg-background rounded border p-4 min-h-80 relative overflow-hidden"
    @drop.prevent="onDrop"
    @dragover.prevent="onDrag"
    @dragleave="onLeave"
  >
    <input
      ref="inputRef"
      type="file"
      :multiple
      :accept="buildAccept(accept)"
      class="hidden"
      @change="onInput"
    >

    <div
      class="absolute inset-0 z-30 flex flex-col items-center justify-center gap-2 transition"
      :class="[
        dragging && 'bg-accent/10 border-accent',
        files.length && 'pointer-events-none opacity-5',
      ]"
      :style="{
        background: 'oklch(from var(--background) l c h)',
        backgroundImage: `
    linear-gradient(
      to right,
      var(--border) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      var(--border) 1px,
      transparent 1px
    ),
    radial-gradient(
      circle at 50% 60%,
      oklch(from var(--accent) l c h / 0.25),
      oklch(from var(--muted) l c h / 0.15) 40%,
      transparent 70%
    )
  `,
        backgroundSize: '40px 40px, 40px 40px, 100% 100%',
      }"
      @click="openPicker"
    >
      <span>Subir archivos</span>
      <span class="text-sm">Arrastre o haga click</span>

      <div class="size-32 relative group shadow hover:shadow-none rounded-sm">
        <div class="absolute inset-0 border-2 border-dashed border-border rounded-sm" />
        <div
          class="absolute inset-0 bg-accent flex items-center justify-center rounded-sm
          group-hover:bg-accent/80 group-hover:translate-x-4 group-hover:-translate-y-2 transition"
        >
          <Upload />
        </div>
      </div>
    </div>

    <div class="relative z-20 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        v-for="(f, i) in files"
        :key="i"
        class="relative border rounded overflow-hidden group bg-muted"
        :class="[f.error && 'border-destructive']"
      >
        <img
          v-if="f.isImage"
          :src="f.url"
          class="object-cover w-full h-32"
        >

        <div
          v-else
          class="h-32 flex items-center justify-center text-xs text-muted-foreground"
        >
          <div
            class="flex flex-col items-center justify-center gap-1"
            :class="getFileKind(f.file)?.color"
          >
            <span class="text-2xl">{{ getFileKind(f.file)?.icon }}</span>
            <span class="text-xs">{{ getFileKind(f.file)?.label }}</span>
          </div>
        </div>

        <span
          v-if="f.error"
          class="text-xs text-destructive ml-2"
        >
          {{ f.error }}
        </span>

        <div class="px-2 py-1 flex flex-col items-start justify-center gap-1 w-full">
          <span
            class="font-medium text-xs truncate w-full"
            :title="f.file.name"
          >
            {{ f.file.name }}
          </span>
          <span
            class="text-muted-foreground text-xs truncate w-full"
          >
            {{ (f.file.size / 1024).toFixed(1) }} KB
          </span>
        </div>

        <Button
          class="absolute top-1 right-1 bg-background/60 p-0 rounded-full opacity-0 group-hover:opacity-100 transition"
          size="icon-sm"
          variant="secondary"
          @click="removeFile(i)"
        >
          <X class="size-4" />
        </Button>
      </div>
    </div>

    <div v-if="files.length" class="relative z-20 mt-4 text-sm text-muted-foreground">
      {{ files.length }} {{ files.length === 1 ? 'archivo' : 'archivos' }} — {{ (totalSize / 1024).toFixed(1) }} KB
    </div>

    <div class="w-auto flex items-center justify-center gap-2 absolute bottom-4 right-4 z-30">
      <Button
        v-if="files.length > 0"
        size="icon-sm"
        class="text-destructive hover:bg-destructive/20"
        variant="secondary"
        @click="clean"
      >
        <Trash />
      </Button>
      <Button
        v-if="multiple && files.length"
        size="icon-sm"
        class="hover:bg-accent/90"
        variant="secondary"
        @click="openPicker"
      >
        <Plus />
      </Button>
    </div>
  </div>
</template>
