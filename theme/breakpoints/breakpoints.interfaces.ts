type Overwrite<T, U> = Omit<T, keyof U> & U

type GenerateStringUnion<T> = Extract<
  {
    [Key in keyof T]: true extends T[Key] ? Key : never
  }[keyof T],
  string
>

export type OverridableStringUnion<T, U = unknown> = GenerateStringUnion<
  Overwrite<T, U>
>

export type BreakpointDefaults = Record<"xs" | "sm" | "md" | "lg" | "xl", true>
export interface BreakpointOverrides {}

export type Breakpoint = OverridableStringUnion<
  BreakpointDefaults,
  BreakpointOverrides
>

export type BreakpointValues = { [key in Breakpoint]: number }

export interface Breakpoints {
  keys: Breakpoint[]
  values: BreakpointValues
  up: (key: Breakpoint | number) => string
  down: (key: Breakpoint | number) => string
  between: (start: Breakpoint | number, end: Breakpoint | number) => string
  only: (key: Breakpoint) => string
  width: (key: Breakpoint) => number
}
