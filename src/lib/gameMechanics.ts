import { aerAns, score } from '$lib/store'

export const randStringGenerator = (length: number): string[] => {
  const txtArr: string[] = []
  const aer = Math.round(Math.random() * (length - 1))
  aerAns.set(aer)
  for (let i = 0; i < length; i++) {
    txtArr.push(i === aer ? 'แ' : 'เ')
  }
  return txtArr
}

export const scoreHandler = (ans: boolean) => {
  if (ans) {
    score.update((value) => value + 1)
  } else {
    score.update((value) => (value - value > 0 ? 1 : 0))
  }
}

export const resetScore = () => {
  score.set(0)
}
