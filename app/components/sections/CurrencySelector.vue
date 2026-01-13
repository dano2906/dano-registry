<script setup lang="ts">
import CurrencySelector from '~/registry/currency-selector/CurrencySelector.vue'

const registryDependencies = [{
  text: 'button',
}, {
  text: 'command',
}, {
  text: 'popover',
}]

const dependencies = [{
  text: 'currency-codes',
  url: 'https://www.npmjs.com/package/currency-codes',
}]
</script>

<template>
  <PartialsSection id="currency-selector" component-name="currency-selector" description="Selector de monedas con manejo de idiomas" title="Selector de monedas" :registry-dependencies :dependencies>
    <template #example>
      <div class="flex flex-row flex-wrap items-start justify-start gap-2">
        <CurrencySelector lang="es-ES" />
        <CurrencySelector lang="en-US" :config="{ placeholder: 'Select a currency', searchPlaceholder: 'Search a currency', emptyState: 'No currencies available' }" />
        <CurrencySelector lang="fr-FR" :config="{ placeholder: 'Sélectionnez une monnaie', searchPlaceholder: 'Rechercher une monnaie', emptyState: 'Aucune monnaie disponible' }" />
      </div>
    </template>
  </PartialsSection>
</template>
