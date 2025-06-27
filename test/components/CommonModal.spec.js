import { setActivePinia, createPinia } from 'pinia'
import { render, fireEvent, screen } from '@testing-library/vue'
import CommonModal from '@/components/CommonModal.vue'



vi.mock('@store/counter', () => {
  return {
    useCounterStore: vi.fn(() => ({
      count: 0,
      getCounter: vi.fn().mockResolvedValue({data: { count: 10 }})
    }))
}})
describe('CommonModal', () => {
  beforeEach(()=>{
    setActivePinia(createPinia())
  })

  test('모달이 렌더링되고 슬롯이 출력된다', async () => {
    render(CommonModal, {
      props: {
        title: '커스텀제목'
      },
      slots: {        
        default: '<p>본문 내용</p>',        
      }
    })

    
    expect(screen.getByText('본문 내용')).toBeInTheDocument()
    expect(screen.getByText('커스텀제목')).toBeInTheDocument()
  })

  test('닫기 버튼 클릭 시 close 이벤트 발생', async () => {
    
    const { emitted: getEmitted } = render(CommonModal, {
      props: {
      },
      slots: {
        header: '<h2>제목</h2>'
      }
    })

    const closeBtn = screen.getByText('닫기')
    await fireEvent.click(closeBtn)

    const events = getEmitted()['close']
    expect(events).toBeTruthy()
    expect(events[0]).toEqual([])
  })

  // test('msw 테스트', async () => {
  //     const response = await axios.get('/api/user')
  //     console.log(response)
  //     expect(response.status).toBe(200)
  //     expect(response.data).toEqual({ id: 'user-1', name: '홍길동' })
  // })


})


import {useCounterStore} from '@/stores/counter.js' 
import { vi, describe, expect, beforeEach, test } from 'vitest'

vi.mock('axios')
import axios from 'axios'

describe('axios 모킹 테스트',()=>{
  // 테스트를 위한 Pinia 스토어 활성화
  beforeEach(()=>{
    setActivePinia(createPinia())
  })

  test('axios 모킹 테스트', async () => {
    //axios 요청 시 응답이 data: { count: 10 }을 반환하도록 모킹
    axios.get.mockResolvedValue({
      data: { count: 10 }
    })
  
    const store = useCounterStore()
    const count = await store.getCounter()
  
    expect(count).toBe(10)
    expect(axios.get).toHaveBeenCalledOnce()    
  })
})
