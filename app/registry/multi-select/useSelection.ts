import type { MultiSelectItemProp } from '~~/shared/types/app'

export function useSelection(initialValue: MultiSelectDataProp[]) {
  function dedupe(items: MultiSelectItemProp[]) {
    const seen = new Set()
    return items.filter((item) => {
      if (seen.has(item.value)) {
        return false
      }
      seen.add(item.value)
      return true
    })
  }

  const initial = ref(initialValue.map(data => ({
    heading: data.heading,
    items: dedupe(data.items),
  })))
  const selected = ref<Array<MultiSelectItemProp>>([])

  function onSelect(value: string) {
    const index = selected.value.findIndex(item => item.value === value)
    if (index !== -1) {
      selected.value.splice(index, 1)
      return
    }
    const item = initial.value.flatMap(group => group.items).find(item => item.value === value)
    if (item) {
      selected.value.push(item)
    }
  }

  function onRemove(value: string) {
    const index = selected.value.findIndex(item => item.value === value)
    if (index !== -1) {
      selected.value.splice(index, 1)
    }
  }

  return {
    initial,
    selected,
    onSelect,
    onRemove,
  }
}
