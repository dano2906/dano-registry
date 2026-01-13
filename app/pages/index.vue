<script setup lang="ts">
definePageMeta({
  layout: 'default',
  name: 'index',
})
</script>

<template>
  <main class="w-full py-4 px-2 space-y-14">
    <SectionsCurrencySelector />
    <SectionsTypography />
    <SectionsActionButton />
    <SectionsInputPassword />
    <SectionsLoadingSwap />
    <SectionsNumberInput />
    <SectionsMultiSelect />
    <SectionsTelInput />
    <SectionsFileInput />
  </main>
</template>
