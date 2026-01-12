<script setup lang="ts">
definePageMeta({
  layout: 'default',
  name: 'index',
})
</script>

<template>
  <main class="w-full py-4 space-y-14">
    <SectionsTypography />
    <SectionsActionButton />
    <SectionsInputPassword />
    <SectionsLoadingSwap />
    <SectionsNumberInput />
    <SectionsMultiSelect />
    <SectionsTelInput />
  </main>
</template>
