import { browser } from '$app/env'
import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

const defaultValue = { darkTheme: true }
const storage = browser
  ? JSON.parse(window.localStorage['prefs'] || JSON.stringify(defaultValue)) || defaultValue
  : defaultValue

const storeSettings = () => {
  if (browser) {
    window.localStorage['prefs'] = JSON.stringify(storage)
  }
}

export const darkTheme: Writable<boolean> = writable(storage.darkTheme ?? false)
export const modalViewed: Writable<boolean> = writable(false)
export const howtoModalViewed: Writable<boolean> = writable(true)
export const score: Writable<number> = writable(0)
export const timer: Writable<number> = writable(60)
export const aerAns: Writable<number> = writable(99)

darkTheme.subscribe((value) => {
  storage.darkTheme = value
  storeSettings()
})
