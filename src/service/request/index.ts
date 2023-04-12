import axios from "axios"
import type { AxiosInstance, InternalAxiosRequestConfig } from "axios"
import type { IRequestConfig, IRequestInteerceptors } from "./type"

import { ElLoading } from "element-plus"
import "element-plus/lib/components/loading/style/css"
import { LoadingInstance } from "element-plus/lib/components/loading/src/loading"

export default class JmrRequest {
  instance: AxiosInstance
  interceptors?: IRequestInteerceptors
  constructor(config: IRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)
    // 保存每个实例独有的拦截器
    this.interceptors = config.interceptors
    // 每个实例独有的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )
    // 所有实例都有的拦截器
    // 请求拦截
    this.instance.interceptors.request.use(
      (value) => {
        return value
      },
      (err) => {
        return err
      }
    )
    // 响应拦截
    this.instance.interceptors.response.use(
      (value) => {
        return value.data
      },
      (err) => {
        return err
      }
    )
  }
  requset<T>(config: IRequestConfig<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      // 接收这次请求是否需要loading
      const isLoading = config.showLoading ?? true
      let loading: LoadingInstance
      if (isLoading) {
        loading = ElLoading.service({
          lock: true,
          text: "Loading",
          background: "rgba(0, 0, 0, 0.7)"
        })
      }
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(
          config as InternalAxiosRequestConfig
        )
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }
          loading?.close()
          resolve(res)
        })
        .catch((err) => {
          loading?.close()
          reject(err)
          return err
        })
    })
  }

  get<T>(config: IRequestConfig<T>): Promise<T> {
    return this.requset({ ...config, method: "GET" })
  }
  post<T>(config: IRequestConfig<T>): Promise<T> {
    return this.requset({ ...config, method: "POST" })
  }
  delete<T>(config: IRequestConfig<T>): Promise<T> {
    return this.requset({ ...config, method: "DELETE" })
  }
  patch<T>(config: IRequestConfig<T>): Promise<T> {
    return this.requset({ ...config, method: "PATCH" })
  }
}
