/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MODE: string
  readonly PROD: boolean
  readonly DEV: boolean
  readonly VITE_TELEGRAM_BOT_TOKEN?: string
  readonly VITE_TELEGRAM_CHAT_ID?: string
  // добавьте другие переменные окружения по необходимости
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 