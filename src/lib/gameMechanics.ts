import { aerAns } from '$lib/store'

export const randStringGenerator = (length: number): string[] => {
  const txtArr: string[] = []
  const aer = Math.round(Math.random() * (length - 1))
  aerAns.set(aer)
  for (let i = 0; i < length; i++) {
    txtArr.push(i === aer ? 'แ' : 'เ')
  }
  return txtArr
}
