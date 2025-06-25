import { describe, expect, test } from 'vitest'


describe('기본 테스트', () => {

    test('기본 값 비교', () => {
    expect(2 + 2).toBe(4)
    expect('hello').toBe('hello')
    })

    test('객체/배열 비교', () => {
        expect({ a: 1, b: 2 }).toEqual({ a: 1, b: 2 })
        expect([1, 2, 3]).toEqual([1, 2, 3])
    })

  test('truthy/falsy 체크', () => {
    expect(true).toBeTruthy()
    expect(1).toBeTruthy()
    expect(null).toBeFalsy()
    expect('').toBeFalsy()
  })

  test('null / undefined 체크', () => {
    expect(null).toBeNull()
    expect(undefined).toBeUndefined()
    expect('abc').not.toBeUndefined()
  })

  test('문자열 포함 여부', () => {
    expect('vitest is great').toContain('great')
    expect('vitest').toMatch(/vi/)
  })

  test('배열 요소 포함 여부', () => {
    expect([1, 2, 3]).toContain(2)
  })

  function throwError() {
    throw new Error('예외 발생')
  }
  
  test('에러 발생 체크', () => {
    expect(() => throwError()).toThrow()
    expect(() => throwError()).toThrow('예외 발생')
  })
  
})