<script setup lang="ts">
import { data } from 'currency-codes'
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-vue-next'
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const { lang = 'es-ES', config = {
  placeholder: 'Seleccione una moneda',
  searchPlaceholder: 'Buscar una moneda',
  emptyState: 'No hay monedas disponibles',
} } = defineProps<{
  lang?: string
  config?: {
    placeholder?: string
    searchPlaceholder?: string
    emptyState?: string
  }
}>()

const model = defineModel()

const open = ref(false)
const currencyNames = new Intl.DisplayNames([lang], { type: 'currency' })

function capitalizeFirstLetter(str: string | undefined): string {
  if (!str)
    return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function getSymbol(code: string): string | undefined {
  const symbol = new Intl.NumberFormat(lang, {
    style: 'currency',
    currency: code,
  }).formatToParts(0).find(part => part.type === 'currency')?.value
  return symbol?.length === 1 ? `(${symbol})` : ''
}
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        class="w-full max-w-xs justify-between"
      >
        <span class="truncate font-semibold">{{
          model
            ? capitalizeFirstLetter(currencyNames.of(model))
            : config.placeholder
        }}</span>
        <ChevronsUpDownIcon class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-full max-w-sm p-0">
      <Command>
        <CommandInput :placeholder="config.searchPlaceholder" />
        <CommandList>
          <CommandEmpty>{{ config.emptyState }}</CommandEmpty>
          <CommandGroup>
            <CommandItem
              v-for="c in data"
              :key="c.currency"
              :value="c.code"
              @select="() => {
                model = c.code
                open = false
              }"
            >
              <CheckIcon
                :class="cn(
                  'mr-2 h-4 w-4',
                  model === c.code ? 'opacity-100' : 'opacity-0',
                )"
              />
              <span class="text-sm font-semibold">{{ getSymbol(c.code) }} {{ capitalizeFirstLetter(currencyNames.of(c.code)) }}</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
