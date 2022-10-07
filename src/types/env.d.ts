declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const Component: DefineComponent<Recordable, Recordable, any>
  export default Component
}

declare interface ImportMetaEnv {
  VITE_APP_PACK_ENV: string
  VITE_APP_API_SECRET: string
  VITE_APP_PUBLIC_API_BASE_URL: string
  // 更多環境變數...
}