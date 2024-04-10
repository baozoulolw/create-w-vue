import {defineMyMock,successWrap} from "../shared/utils";
import _ from 'lodash'

export default defineMyMock({
  method:'POST',
  url:'/test',
  delay:[500,2000],
  body: successWrap({a:'12313'})
})
