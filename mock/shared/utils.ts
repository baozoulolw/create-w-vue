import path from 'node:path'
import {createDefineMock} from "vite-plugin-mock-dev-server";
export const successWrap = (data = {}, msg = 'success') => ({
  code: 0,
  msg,
  data
})
export const errorWrap = (msg = 'error') => ({
  code: 500,
  msg,
})

export const defineMyMock = createDefineMock(mock => {
  mock.url = path.join('/api', mock.url)
})
