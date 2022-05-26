import axios from '@/utils/request'
export const login = (data) => axios({
  url: '/login',
  method: 'post',
  data: data
})
