<script setup lang="ts">
type Variant = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "blockquote";

const { variant, text } = defineProps<{ variant: Variant; text: string }>();

const data = {
  h1: "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  p: "leading-7 [&:not(:first-child)]:mt-6",
  span: "text-sm font-medium leading-none",
  blockquote: "mt-6 border-l-2 pl-6 italic",
};
</script>

<template>
  <component :is="variant" :class="data[variant]">{{ text }}</component>
</template>
