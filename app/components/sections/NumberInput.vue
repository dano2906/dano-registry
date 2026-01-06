<script lang="ts" setup>
import { DollarSign, EuroIcon } from 'lucide-vue-next'
import InputGroupNumberInput from '~/registry/number-input/InputGroupNumberInput.vue'

const value = ref(0)

const registryDependencies = [
  { text: 'input' },
]
</script>

<template>
  <PartialsSection component-name="number-input" description="Input numérico que controla valores inválidos." title="Input numérico" :registry-dependencies>
    <template #example>
      <div class="flex flex-col flex-wrap items-start justify-start gap-2">
        <div class="w-full flex flex-wrap items-center justify-start gap-2">
          <NumberInput v-model="value" :step="0.2" class="w-32" />
          <InputGroup class="w-32">
            <InputGroupNumberInput v-model="value" :step="0.3" />
            <InputGroupAddon>
              <InputGroupText>
                <DollarSign />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <Label> Con condición (par)
          <InputGroup class="w-32">
            <InputGroupNumberInput v-model="value" :condition="(v:number) => v % 2 === 0" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>
                <EuroIcon />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Label>
      </div>
    </template>
  </PartialsSection>
</template>
