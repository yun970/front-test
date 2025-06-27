

import { render, fireEvent, screen } from '@testing-library/vue'
import { test, describe, expect, beforeEach, vi } from 'vitest';

import TestCounter from '@/components/TestCounter.vue'
import axios from 'axios';

vi.mock('axios')

describe('컴포넌트 테스트', ()=>{
    

    test('값 증가 버튼 클릭', async () => {
        render(TestCounter)
        expect(screen.getByText('Times clicked: 0')).toBeTruthy() // 초기 상태 확인
        const button = screen.getByText('increment')
        await fireEvent.click(button)        
        expect(screen.queryByText('Times clicked: 2')).toBeFalsy() // 실패 테스트 확인
        await fireEvent.click(button)
        expect(screen.getByText('Times clicked: 2')).toBeTruthy() // 클릭 후 상태 확인        
      })
      
      
      
      vi.mock('@/stores/counter.js', () => {  
        return {
          useCounterStore: vi.fn(() => ({      
            getCounter: vi.fn(()=> (2))
          }))
        }
      })

    /*
      vi.mock을 통해 컴포넌트 내부에서 사용되는 Store 자체를 모킹 -> store의 메서드나 상태 의존성을 대체하여
      컴포넌트만 독립적인 환경에서 테스트할 수 있다
    */
    
    test('컴포넌트 내부의 Store 모킹 테스트', async () => {            
      render(TestCounter)      
      expect(await screen.findByText('Store count: 2')).toBeTruthy() // 컴포넌트 내부에 store의 상태가 반영되었는지 확인
    })

    

    /*
      vi.mock을 통해 컴포넌트 내부에서 사용되는 axios 자체를 모킹 -> 외부 api 요청에 대한 의존성을 대체하여
      컴포넌트만 독립적인 환경에서 테스트할 수 있다
    */

    beforeEach(() => {
      axios.get.mockResolvedValue({data : { count: 2 }}) // axios 모킹
    })

    test('컴포넌트 내부의 axios 호출 모킹 테스트', async () => {            
      
      render(TestCounter)            
      expect(await screen.findByText('axios count: 2')).toBeTruthy() // 컴포넌트 내부에 api 요청 값의 상태가 반영되었는지 확인

    })

})
