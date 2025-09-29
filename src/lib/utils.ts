import { clsx, type ClassValue } from 'clsx'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function animationDelay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function transitionPage(href: string, router: AppRouterInstance) {
  const overlay = document.getElementById('transition-overlay')
  if (!overlay) return
  overlay.classList.remove('origin-right', 'scale-x-100')
  overlay.classList.add('origin-left', 'scale-x-0')
  overlay.classList.add('scale-x-100')
  await animationDelay(500)
  router.push(href)
  await animationDelay(500)
  overlay.classList.remove('origin-left')
  overlay.classList.add('origin-right')
  overlay.classList.remove('scale-x-100')
}
