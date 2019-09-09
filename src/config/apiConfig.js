

import { host } from './index'

const api = {
   'user': '/user/user',
   'list': '/user/list'
}

Object.keys(api).forEach(key => {
    api[key] = host + api[key];
  })

export default api;