// src/mocks/browser.js
import { setupWorker } from 'msw'
import { handlers } from './test/utils/handler.js'

export const worker = setupWorker(...handlers)