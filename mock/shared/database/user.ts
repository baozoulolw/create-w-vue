import {defineMockData} from 'vite-plugin-mock-dev-server'
import Mock from 'mockjs'

export const userList = defineMockData('userList', Mock.mock({
  'list|10-100': [{
    'username|+1': 1,
    'password|+1': 1,
    nickname: '@cname',
    gender: '@pick(["男", "女"])',
    age: '@integer(18, 60)',
    'status|1-5': 1,
    'avatar|1': ['@image(100x100, @color)', '@image(100x100, @color)'],
  }]
}))
