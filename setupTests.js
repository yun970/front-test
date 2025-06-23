import '@testing-library/jest-dom'
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// MSW 서버 생성
const server = setupServer(...handlers)

// 테스트 전체 전/후 훅 등록
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())