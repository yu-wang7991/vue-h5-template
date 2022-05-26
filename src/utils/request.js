import http from 'axios'
const axios = http.create({
  baseURL: 'https://www.fastmock.site/mock/deb5bd720a17fe786e552049f1580382/api',
  timeout: 5 * 1000
})
export default ({ url, method = 'GET', params = {}, data = {}, headers = {} }) => {
  // 添加请求拦截器
  axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
    return config
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  })

  // 添加响应拦截器
  axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
    return response
  }, function (error) {
    console.dir(error)
    // 对响应错误做点什么
    return Promise.reject(error)
  })
  return axios({
    url,
    method,
    params,
    data,
    headers
  })
}
