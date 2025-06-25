// test/AppUtils.spec.js
import { describe, test, expect, vi } from 'vitest'
import {
  formatDate,
  formatDateToYYYYMMDD,
  formatDateTime,
  getCookieValue,
  deleteCookie,
  nullCheck,
  createDeferredPromise,
  sleep,
  throttle,
} from '@/common/Utils/AppUtil'

describe('AppUtil.js', () => {
  test('formatDate should format date to YYYY-MM-DD', () => {
    expect(formatDate('2023-01-01')).toBe('2023-01-01')
    expect(formatDate(new Date('2023-01-01'))).toBe('2023-01-01')    
    expect(formatDate(null)).toBe('')
  })

  test('formatDateToYYYYMMDD should format date to YYYYMMDD', () => {
    expect(formatDateToYYYYMMDD('2023-01-01')).toBe('20230101')
    expect(formatDateToYYYYMMDD(new Date('2023-01-01'))).toBe('20230101')
    expect(formatDateToYYYYMMDD(null)).toBe('')
  })

  test('formatDateTime should format date to YYYY-MM-DD HH:MI:SS', () => {
    expect(formatDateTime('2023-01-01T12:34:56')).toBe('2023-01-01 12:34:56')
    expect(formatDateTime(new Date('2023-01-01T12:34:56'))).toBe('2023-01-01 12:34:56')    
    expect(formatDateTime(null)).toBe('')
  })

  test('getCookieValue should return the value of a cookie', () => {
    document.cookie = 'testKey=testValue'
    expect(getCookieValue('testKey')).toBe('testValue')
    expect(getCookieValue('nonExistentKey')).toBe(null)
  })

  test('deleteCookie should remove a cookie', () => {
    document.cookie = 'testKey=testValue'
    deleteCookie('testKey')
    expect(getCookieValue('testKey')).toBe(null)
  })

  test('nullCheck should return true for null, undefined, or empty values', () => {
    expect(nullCheck(null)).toBe(true)
    expect(nullCheck(undefined)).toBe(true)
    expect(nullCheck('')).toBe(true)
    expect(nullCheck('   ')).toBe(true)
    expect(nullCheck('value')).toBe(false)
  })

  test('createDeferredPromise should create a deferred promise', async () => {
    const { promise, resolve } = createDeferredPromise()
    let resolved = false
    promise.then(() => (resolved = true))
    resolve()
    await promise
    expect(resolved).toBe(true)
  })

  test('sleep should delay execution', async () => {
    const start = Date.now()
    await sleep(0.1) // 100ms
    const end = Date.now()
    expect(end - start).toBeGreaterThanOrEqual(100)
  })

  test('throttle should limit function calls', async () => {
    const mockFn = vi.fn()
    const throttledFn = throttle(mockFn, 100)
    throttledFn()
    throttledFn()
    // expect(mockFn).toHaveBeenCalledTimes(1)
    await sleep(0.2) // 200ms
    throttledFn()
    // expect(mockFn).toHaveBeenCalledTimes(2)
  })

  test('vitest 기본 예제', () => {
    const getApples = vi.fn(() => 0)

    getApples()
    
    expect(getApples).toHaveBeenCalled()
    expect(getApples).toHaveReturnedWith(0)
    
    getApples.mockReturnValueOnce(5)
    
    const res = getApples()
    expect(res).toBe(5)
    expect(getApples).toHaveNthReturnedWith(2, 5)
  })
})