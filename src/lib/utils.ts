import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Функция для получения правильного пути к статическим файлам
export function getAssetPath(path: string): string {
  const basename = import.meta.env.PROD ? "/2basketball" : "";
  return basename + path;
}
