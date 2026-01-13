<script setup lang="ts">
import type { CountryCode } from 'libphonenumber-js'
import { onClickOutside } from '@vueuse/core'
import { AsYouType, getCountries, getCountryCallingCode } from 'libphonenumber-js'
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'

interface Country {
  id: CountryCode
  name: string | undefined
  code: string
  flag: CountryCode
}

const { placeholder = 'Número de teléfono' } = defineProps<{
  placeholder?: string
}>()

const model = defineModel<string>()

const target = useTemplateRef('target')
const phone = ref('')
const open = ref(false)
const search = ref('')
const currentLocale = ref('es')
const specialCountryCodes = [
  'SX',
  'BQ',
  'BV',
  'GF',
  'GP',
  'HM',
  'IO',
  'PM',
  'RE',
  'SJ',
  'UM',
  'XK',
  'AH',
  'NY',
  'AK',
  'AC',
]

const regionNames = computed(() => new Intl.DisplayNames([currentLocale.value], { type: 'region' }))
const countries = computed<Country[]>(() =>
  getCountries()
    .map(code => ({
      id: code,
      name: regionNames.value.of(code),
      code: `+${getCountryCallingCode(code)}`,
      flag: code,
    }))
    .sort((a, b) => (a.name as string).localeCompare(b.name as string)),
)
const selectedCountry = ref(countries.value.find(c => c.id === 'CU')!)

const filteredCountries = computed(() =>
  countries.value.filter(c =>
    c.name?.toLowerCase().includes(search.value.toLowerCase())
    || c.id.toLowerCase().includes(search.value.toLowerCase())
    || c.code.includes(search.value),
  ),
)

onClickOutside(target, (_event) => {
  if (open.value) {
    open.value = false
  }
})

function onInput(e: string | number) {
  const input = e.toString()
  const formatter = new AsYouType(selectedCountry.value.id)
  phone.value = formatter.input(input)
  model.value = formatter.getNumber()?.formatInternational() ?? undefined
}

function selectCountry(c: Country) {
  selectedCountry.value = c
  currentLocale.value = c.id
  open.value = false
  search.value = ''
  if (phone.value) {
    onInput(phone.value)
  }
}
</script>

<template>
  <div ref="target" class="relative w-full max-w-md">
    <div class="flex h-auto border items-center rounded-sm">
      <Button
        type="button"
        class="flex items-center gap-2 px-4 py-3 rounded-none"
        variant="ghost"
        @click="open = !open"
      >
        <img
          v-if="!specialCountryCodes.includes(selectedCountry.flag)"
          class="aspect-square w-6"
          :src="`https://flagsapi.com/${selectedCountry.flag}/flat/64.png`"
          loading="lazy"
          fetchpriority="auto"
        >
        <div v-else class="w-6 h-4 bg-white" />
        <span>{{ selectedCountry.code }}</span>
        <svg class="w-3 h-3 text-secondary-foreground/50" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
        </svg>
      </Button>

      <Input
        type="tel"
        inputmode="numeric"
        :placeholder
        :value="phone"
        class="flex-1 px-4 py-3 rounded-l-none rounded-r-sm border-none outline-none ring-none"
        required
        @update:model-value="onInput"
      />
    </div>

    <div
      v-if="open"
      class="absolute bg-secondary/50 z-50 mt-2 w-full rounded-sm shadow-xl"
    >
      <div class="p-2">
        <Input
          v-model="search"
          placeholder="Buscar país"
          class="w-full px-3 py-2 rounded-sm outline-none"
        />
      </div>

      <div class="max-h-64 overflow-y-auto" role="listbox">
        <Button
          v-for="c in filteredCountries"
          :key="c.id"
          role="option"
          variant="ghost"
          class="w-full flex items-center gap-3 px-4 py-2 text-sm transition"
          @click="selectCountry(c)"
        >
          <img
            v-if="!specialCountryCodes.includes(c.flag)"
            :src="`https://flagsapi.com/${c.flag}/flat/64.png`"
            class="aspect-square w-6"
            loading="lazy"
            fetchpriority="auto"
          >
          <div v-else class="w-6 h-4 bg-white" />
          <span class="flex-1 text-left">{{ c.name }}</span>
          <span class="text-white/40">{{ c.code }}</span>
        </Button>
      </div>
    </div>
  </div>
</template>
