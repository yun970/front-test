/**
 * Date('YYYY-MM-DD') 형식으로 변환
 * @param {string|object} formattingDate 포맷팅할 날짜
 * @returns string 포맷팅된 날짜 문자열
 */
const formatDate = (formattingDate) => {
  let date = ''
  if (typeof formattingDate === 'string') {
    try {
      date = new Date(formattingDate)
    } catch (error) {
      return ''
    }
  } else if (formattingDate instanceof Date) {
    date = formattingDate
  } else {
    return ''
  }

  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  return `${year}-${month}-${day}`
}

/**
 * Date('YYYYMMDD') 형식으로 변환
 * @param {string|object} formattingDate 포맷팅할 날짜
 * @returns string 포맷팅된 날짜 문자열
 */
const formatDateToYYYYMMDD = (formattingDate) => {
  let date = ''
  if (typeof formattingDate === 'string') {
    try {
      date = new Date(formattingDate)
    } catch (error) {
      return ''
    }
  } else if (formattingDate instanceof Date) {
    date = formattingDate
  } else {
    return ''
  }

  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  return `${year}${month}${day}`
}

/**
 * Date('YYYY-MM-DD HH:MI:SS') 형식으로 변환
 * @param {string|object} formattingDate 포맷팅할 날짜
 * @returns string 포맷팅된 날짜 문자열
 */
const formatDateTime = (formattingDate) => {
  let date = ''
  if (typeof formattingDate === 'string') {
    try {
      date = new Date(formattingDate)
    } catch (error) {
      return ''
    }
  } else if (formattingDate instanceof Date) {
    date = formattingDate
  } else {
    return ''
  }

  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

/**
 * 특정key의 쿠키 값 가져오기
 * @param {string} key 쿠키 키 값
 * @returns {string} 쿠키 value 값
 */
const getCookieValue = (key) => {
  // 쿠키 문자열 가져오기
  const cookies = document.cookie

  // 쿠키 문자열을 ; 기준으로 나누어 배열로 변환
  const cookieArray = cookies.split(';').map((cookie) => cookie.trim())

  // 주어진 key에 해당하는 쿠키 찾기
  for (const cookie of cookieArray) {
    // 쿠키가 key=value 형식인지 확인
    if (cookie.startsWith(`${key}=`)) {
      // key에 해당하는 쿠키 값을 추출하여 반환
      return cookie.substring(key.length + 1) // key.length + 1은 '=' 다음부터 값의 시작 인덱스입니다.
    }
  }

  // 해당 key의 쿠키가 없을 경우
  return null
}

/**
 * 특정key의 쿠키 제거
 * @param {string} key 쿠키 키 값
 */
const deleteCookie = (key) => (document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`)

const nullCheck = (value) => {
  if (value === null || value === undefined || value === '') {
    return true
  }
  if (typeof value === 'string' && !value.trim()) {
    return true
  }
  return false
}

// 비동기 Promise 생성
const createDeferredPromise = () => {
  let resolve, reject
  const promise = new Promise((res, rej) => {
    resolve = res
    reject = rej
  })
  return { promise, resolve, reject }
}

// Waiting Promise
const sleep = (sec) => new Promise((resolve) => setTimeout(resolve, sec * 1000))

const throttle = (parameterFunction, delay) => {
  let timer
  return function () {
    const context = this
    const args = arguments
    if (!timer) {
      timer = setTimeout(() => {
        parameterFunction.apply(context, args)
        timer = null
      }, delay)
    }
  }
}
export { formatDate, formatDateToYYYYMMDD, formatDateTime, getCookieValue, deleteCookie, nullCheck, createDeferredPromise, sleep, throttle }
