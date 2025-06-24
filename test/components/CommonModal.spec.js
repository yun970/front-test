import { render, fireEvent } from '@testing-library/vue'
import CommonModal from '@/components/CommonModal.vue' // 경로는 실제 프로젝트에 맞게 조정
import axios from 'axios'

describe('CommonModal', () => {
  test('모달이 렌더링되고 슬롯이 출력된다', async () => {
    const { getByText } = render(CommonModal, {
      props: {
        title: '커스텀제목'
      },
      slots: {        
        default: '<p>본문 내용</p>',        
      }
    })

    
    expect(getByText('본문 내용')).toBeInTheDocument()
    expect(getByText('커스텀제목')).toBeInTheDocument()
  })

  test('닫기 버튼 클릭 시 close 이벤트 발생', async () => {
    
    const { getByText, emitted: getEmitted } = render(CommonModal, {
      props: {
      },
      slots: {
        header: '<h2>제목</h2>'
      }
    })

    const closeBtn = getByText('닫기')
    await fireEvent.click(closeBtn)

    const events = getEmitted()['close']
    expect(events).toBeTruthy()
    expect(events[0]).toEqual([])
  })

  test('msw 테스트', async () => {
      const response = await axios.get('/api/user')
      expect(response.status).toBe(200)
      expect(response.data).toEqual({ id: 'user-1', name: '홍길동' })
  })

  // test('close가 true면 렌더링되지 않음', () => {
  //   const { queryByText } = render(CommonModal, {
  //     props: {
  //     },
  //     slots: {
  //       default: '<p>숨겨진 모달</p>'
  //     }
  //   })

  //   expect(queryByText('숨겨진 모달')).toBeNull()
  // })
})