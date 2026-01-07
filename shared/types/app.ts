export interface Dependency {
  text: string
  url?: string
}

export interface MultiSelectDataProp {
  heading?: string
  items: MultiSelectItemProp[]
}

export interface MultiSelectItemProp {
  text: string
  value: string
}
