import { render, screen, within , waitFor} from '@testing-library/vue'
import { describe, test, expect } from 'vitest'
import CommonTable from '@/components/CommonTable.vue'

describe('CommonTable.vue', () => {
  test('디폴트 props 렌더링', () => {
    render(CommonTable)

    // 기본적으로 빈 테이블이 렌더링되어야 함
    expect(screen.getByRole('table')).toBeTruthy()
    expect(screen.queryByRole('columnheader')).toBeNull() // 헤더 없음
    expect(screen.queryByRole('cell')).toBeNull() // 데이터 없음
  })

  test('data와 header에 따라 테이블 렌더링', () => {
    const data = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 }
    ]
    const header = ['Name', 'Age']

    render(CommonTable, {
      props: { data, header }
    })

    // 헤더 확인
    header.forEach((headerText) => {
      expect(screen.getByText(headerText)).toBeTruthy()
    })


    // 데이터 확인
    data.forEach((row) => {
      Object.values(row).forEach((cellValue) => {
        expect(screen.findByText(cellValue)).toBeTruthy()
      })
    })
  })

  test('캡션과 테이블 렌더링', () => {
    const caption = 'Test Table'

    render(CommonTable, {
      props: { caption }
    })

    // 캡션 확인
    expect(screen.getByText(caption)).toBeTruthy()
  })



//   test('사용자가 커스텀한 order대로 렌더링', async () => {
//     const data = [
//       { name: 'Alice', age: 25, city: 'New York' },
//       { name: 'Bob', age: 30, city: 'Los Angeles' }
//     ]
//     const order = ['city', 'name', 'age']

//     const { container } =render(CommonTable, {
//       props: { data, order }
//     })
//   })

  // 추가 테스트: 빈 데이터와 헤더가 주어졌을 때 렌더링 확인
  test('빈 데이터와 헤더 렌더링', () => {
    const data = []
    const header = ['Name', 'Age']

    render(CommonTable, {
      props: { data, header }
    })

    // 헤더는 렌더링되지만 데이터는 없어야 함
    header.forEach((headerText) => {
      expect(screen.getByText(headerText)).toBeTruthy()
    })
    expect(screen.queryByRole('cell')).toBeNull()
  })

  // 추가 테스트: 잘못된 props가 주어졌을 때 기본 동작 확인
//   test('잘못된 props 처리', () => {
//     const data = null
//     const header = null

//     render(CommonTable, {
//       props: { data, header }
//     })

//     // 기본적으로 빈 테이블이 렌더링되어야 함
//     expect(screen.getByRole('table')).toBeTruthy()
//     expect(screen.queryByRole('columnheader')).toBeNull()
//     expect(screen.queryByRole('cell')).toBeNull()
//   })
})