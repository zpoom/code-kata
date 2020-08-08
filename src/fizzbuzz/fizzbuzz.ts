export const fizzbuzz = (value: number) => {
  const valueString = value.toString()
  if (value % 15 === 0) return 'fizzbuzz'
  if (value % 5 == 0 || valueString.includes('5')) return 'buzz'
  if (value % 3 == 0 || valueString.includes('3')) return 'fizz'
  return value
}
