import type { ModelRef } from 'vue'
import type { AcceptType, FileKind, FilePreview } from './file-input'

export const fileTypeMap: Record<string, FileKind> = {
  'image': {
    label: 'Imagen',
    icon: '🖼️',
    color: 'text-chart-2',
  },
  'video': {
    label: 'Video',
    icon: '🎥',
    color: 'text-chart-3',
  },
  'audio': {
    label: 'Audio',
    icon: '🎧',
    color: 'text-chart-4',
  },
  'application/pdf': {
    label: 'PDF',
    icon: '📄',
    color: 'text-destructive',
  },
  'application/zip': {
    label: 'ZIP',
    icon: '🗜️',
    color: 'text-chart-5',
  },
  'text': {
    label: 'Texto',
    icon: '📃',
    color: 'text-muted-foreground',
  },
  'default': {
    label: 'Archivo',
    icon: '📦',
    color: 'text-muted-foreground',
  },
}

export function useFileInput(files: ModelRef<FilePreview[], string, FilePreview[], FilePreview[]>, maxSize?: number) {
  const inputRef = ref<HTMLInputElement | null>(null)
  const dragging = ref(false)

  function buildAccept(types: AcceptType[]) {
    return Array.from(new Set(types)).join(',')
  }

  function openPicker() {
    inputRef.value?.click()
  }

  function getFileKind(file: File) {
    if (fileTypeMap[file.type])
      return fileTypeMap[file.type]

    const group = file.type.split('/')[0]
    if (group && fileTypeMap[group])
      return fileTypeMap[group]

    return fileTypeMap.default
  }

  function validateFile(file: File): string | undefined {
    if (maxSize && (file.size > maxSize))
      return 'El archivo supera 10MB'
  }

  function clean() {
    files.value = []
  }

  function handleFiles(fileList: FileList) {
    Array.from(fileList).forEach((file) => {
      const isImage = file.type.startsWith('image/')
      const url = isImage ? URL.createObjectURL(file) : undefined
      const error = validateFile(file)
      files.value?.push({ file, url, isImage, error })
    })
  }

  function onInput(e: Event) {
    const target = e.target as HTMLInputElement
    if (target.files)
      handleFiles(target.files)
  }

  function removeFile(index: number) {
    const f = files.value[index]
    if (f?.url)
      URL.revokeObjectURL(f.url)
    files.value.splice(index, 1)
  }

  function onDrop(e: DragEvent) {
    e.preventDefault()
    dragging.value = false
    if (e.dataTransfer?.files)
      handleFiles(e.dataTransfer.files)
  }

  function onDrag(e: DragEvent) {
    e.preventDefault()
    dragging.value = true
  }

  function onLeave() {
    dragging.value = false
  }

  const totalSize = computed(() =>
    files.value.reduce((acc, f) => acc + f.file.size, 0),
  )

  return {
    inputRef,
    dragging,
    openPicker,
    getFileKind,
    validateFile,
    clean,
    handleFiles,
    onInput,
    removeFile,
    onDrop,
    onDrag,
    onLeave,
    buildAccept,
    totalSize,
  }
}
