import { modalViewed, howtoModalViewed } from '$lib/store'

export const handleModalClass = (e: Event, mViewed: boolean, disabled = false) => {
  e.preventDefault()
  if (disabled && !mViewed) {
    return
  }
  if (mViewed) {
    modalViewed.set(false)
  } else {
    modalViewed.set(true)
  }
}

export const handleHowToClass = (e: Event, mViewed: boolean, disabled = false) => {
  e.preventDefault()
  if (disabled && !mViewed) {
    return
  }
  if (mViewed) {
    howtoModalViewed.set(false)
  } else {
    howtoModalViewed.set(true)
  }
}
