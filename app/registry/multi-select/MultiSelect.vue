<script setup lang="ts">
import type { MultiSelectDataProp } from '~~/shared/types/app'
import { useSelection } from './useSelection'

const { data, config = {
  emptyMessage: 'Seleccione una o varias opciones',
  emptySearchMessage: 'No se encontraron resultados',
  searchPlaceholder: 'Buscar...',
} } = defineProps<{
  data: MultiSelectDataProp[]
  config?: {
    emptyMessage: string
    emptySearchMessage: string
    searchPlaceholder: string
  }
}>()

const field = defineModel<string[]>({
  default: () => [],
})

const { onSelect, onRemove, selected, initial } = useSelection(data)

const expanded = ref(false)

watchEffect(() => {
  field.value = selected.value.map(item => item.value)
})
</script>

<template>
  <LoadingSwap :is-loading="false">
    <Command class="rounded-sm">
      <div class="w-full py-1.5 relative px-2 border-b border-primary-foreground/10 flex items-center justify-start gap-2 flex-wrap" :class="[expanded ? 'max-h-auto' : 'max-h-9 overflow-hidden']">
        <template v-if="selected.length > 1">
          <MultiSelectValue v-for="(item, index) in selected" :key="index" :item="item" :on-remove="onRemove">
            {{ item.value }}
          </MultiSelectValue>
          <MultiSelectExpand v-model="expanded" />
        </template>
        <template v-else-if="selected.length === 1">
          <MultiSelectValue :item="selected[0] as MultiSelectItemProp" :on-remove="onRemove">
            {{ selected[0]?.value }}
          </MultiSelectValue>
        </template>
        <template v-else>
          <div>
            <PartialsTypography variant="span" :text="config.emptyMessage" />
          </div>
        </template>
      </div>
      <CommandInput :placeholder="config.searchPlaceholder" class="w-full" />
      <CommandList>
        <CommandEmpty>{{ config.emptySearchMessage }}</CommandEmpty>
        <CommandGroup v-for="(group, index) in initial" :key="index" :heading="group.heading" class="space-y-1">
          <MultiSelectItem
            v-for="item in group.items"
            :key="item.value"
            :items="group.items"
            :item
            :checked="selected.some(badge => badge.value === item.value)"
            @select="onSelect"
          />
        </CommandGroup>
      </CommandList>
    </Command>
  </LoadingSwap>
</template>
