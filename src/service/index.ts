// service统一出口
import JmrRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"
const jmrrequest = new JmrRequest({
  timeout: TIME_OUT,
  baseURL: BASE_URL,
  interceptors: {
    requestInterceptors(value) {
      const token = "123"
      if (token) {
        value.headers.Authorization = `Bearer ${token}`
      }
      return value
    }
  }
})
export default jmrrequest
