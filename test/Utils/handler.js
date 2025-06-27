import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/user', () => {
    return HttpResponse.json(      
      { name: 'Yun SeokJun' }
    )
  }),

  http.get('/api/posts', () => {
    return HttpResponse.json(      
      [
        { id: 1, title: '첫 번째 게시글', writer: '홍길동' },
        { id: 2, title: '두 번째 게시글', writer: '김이박' },
        { id: 3, title: '세 번째 게시글', writer: '박퓨전' },
      ]
    )
  })
]