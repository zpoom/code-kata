import { fizzbuzz } from './fizzbuzz'

describe('<----------------------- Fizzbuzz module ----------------------->', () => {
  test('Should return fizz  when input is divided by 3 or includes 3 in any digits', () => {
    // divided by 3
    expect(fizzbuzz(3)).toEqual('fizz')
    expect(fizzbuzz(18)).toEqual('fizz')

    // include `3`
    expect(fizzbuzz(13)).toEqual('fizz')
    expect(fizzbuzz(23)).toEqual('fizz')
  })

  test('Should return buzz when input is divided by 5 or includes 5 in any digits', () => {
    // divided by 5
    expect(fizzbuzz(5)).toEqual('buzz')
    expect(fizzbuzz(25)).toEqual('buzz')

    // include `5`
    expect(fizzbuzz(51)).toEqual('buzz')
    expect(fizzbuzz(54)).toEqual('buzz')
  })

  test('Should return fizzbuzz in the position that divided by 3 and 5', () => {
    expect(fizzbuzz(15)).toEqual('fizzbuzz')
  })

  test('Should return the same value when they not meet any previous cases', () => {
    expect(fizzbuzz(1)).toEqual(1)
  })
})
