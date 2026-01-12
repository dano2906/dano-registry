<script setup lang="ts" generic="T extends Record<PropertyKey, any>">
import { Check } from 'lucide-vue-next'
import { Command, CommandEmpty, CommandInput, CommandList } from '@/components/ui/command'
import Typography from '@/registry/typhography/Typography.vue'
import AsyncMultiSelectActions from './AsyncMultiSelectActions.vue'
import AsyncMultiSelectValue from './AsyncMultiSelectValue.vue'

const { url, sourceKey, k, v, config = {
  emptyMessage: 'Seleccione una o varias opciones',
  emptySearchMessage: 'No se encontraron resultados',
  searchPlaceholder: 'Buscar...',
} } = defineProps<{
  url: string
  sourceKey?: string
  k: keyof T
  v: keyof T
  config?: {
    emptyMessage: string
    emptySearchMessage: string
    searchPlaceholder: string
  }
}>()

const field = defineModel<T[]>({
  default: () => [],
})

const data = ref<T[]>([])
const isLoading = ref(false)
const expanded = ref(false)
const isAllSelected = computed(() => field.value.length === data.value.length)

function onMark(mark: boolean) {
  if (mark === true) {
    field.value = data.value
  }
  else {
    field.value = []
  }
}

function onSelect(item: T) {
  const index = field.value.findIndex(i => i[k] === item[k])
  if (index !== -1) {
    field.value.splice(index, 1)
    return
  }
  field.value.push(item)
}

function onRemove(item: T) {
  const index = field.value.findIndex(i => i[k] === item[k])
  if (index !== -1) {
    field.value.splice(index, 1)
  }
}

onMounted(async () => {
  try {
    isLoading.value = true
    const res = await fetch(url)
    const json = await res.json()
    if (sourceKey) {
      data.value = json[sourceKey]
      return
    }
    data.value = json as T[]
  }
  catch (error) {
    console.error(error)
  }
  finally {
    isLoading.value = false
  }
})
</script>

<template>
  <LoadingSwap :is-loading="data.length === 0 || isLoading" class="bg-muted rounded-sm min-h-92">
    <Command class="rounded-sm">
      <div class="w-full py-1.5 relative px-2 border-b border-primary-foreground/10 flex items-center justify-start gap-2 flex-wrap" :class="[expanded ? 'max-h-auto' : 'max-h-9 overflow-hidden']">
        <template v-if="field.length > 0">
          <AsyncMultiSelectValue v-for="(item, index) in field" :key="index" :v :item @on-remove="onRemove(item)" />
          <AsyncMultiSelectActions v-model="expanded" :selected="field.length" :marked="isAllSelected" @mark="onMark" />
        </template>
        <template v-else>
          <div>
            <Typography variant="span" :text="config.emptyMessage" />
          </div>
        </template>
      </div>
      <CommandInput :placeholder="config.searchPlaceholder" class="w-full" />
      <CommandList>
        <CommandEmpty>{{ config.emptySearchMessage }}</CommandEmpty>
        <CommandGroup class="space-y-1">
          <CommandItem v-for="item in data" :key="item[k]" :value="item[v]" class="min-h-7" @select="onSelect(item)">
            <Check v-if="field.some(i => i[k] === item[k])" class="text-muted-foreground" />
            <Typography variant="span" :text="item[v]" :class="[field.some(i => i[k] === item[k]) ? 'ml-0' : 'ml-6']" />
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  </LoadingSwap>
</template>
