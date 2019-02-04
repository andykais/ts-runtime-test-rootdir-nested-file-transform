import { Parent } from '../'

export type Opto = {
  greeting: string
}

type O = {
  field: boolean
}
export type Generic<T extends O> = {
  oFields: T
}

export type FlatOpto = Parent & Opto
