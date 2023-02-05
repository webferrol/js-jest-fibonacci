const fibonacci = require('./fibonacci')

require('./fibonacci')

/* global describe, test, expect */

describe('fibonacci file', () => {
  test('should print an error if the argument is not a number', () => {
    const fibonacciExecute = () => {
      fibonacci('jeje')
    }
    expect(fibonacciExecute).toThrow(/not a number/i)
  })

  test('should print [0] if the number is 0', () => {
    const serie = 0
    const result = fibonacci(serie)
    expect(result[0]).toBe(0)
  })

  test('should print [0,1] if the number is 1', () => {
    const serie = 1
    const result = fibonacci(serie)
    expect(result.join()).toBe('0,1')
  })

  test('should print [0,1,1] if the number is 2', () => {
    const serie = 2
    const result = fibonacci(serie)
    expect(result.join()).toBe('0,1,1')
  })

  test('should print [0,1,1,2] if the number is 3', () => {
    const serie = 3
    const result = fibonacci(serie)
    expect(result.join()).toBe('0,1,1,2')
  })

  test('should print [0,1,1,2,3] if the number is 4', () => {
    const serie = 4
    const result = fibonacci(serie)
    expect(result.join()).toBe('0,1,1,2,3')
  })

  test('should print [0,1,1,2,3,5,8,13,21,34,55] if the number is 10', () => {
    const serie = 10
    const result = fibonacci(serie)
    expect(result.join()).toBe('0,1,1,2,3,5,8,13,21,34,55')
  })
})
