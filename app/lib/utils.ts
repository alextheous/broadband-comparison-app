import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`
}

export function formatSpeed(speed: number): string {
  return `${speed} Mbps`
}

export const SPEED_TIERS = [
  { value: 25, label: 'Basic (0-25 Mbps)', description: 'Good for browsing and email' },
  { value: 50, label: 'Speedy (25-50 Mbps)', description: 'Perfect for streaming and work' },
  { value: 100, label: 'Fast (50-100 Mbps)', description: 'Great for gaming and multiple devices' },
  { value: 250, label: 'Lightning (100-250 Mbps)', description: 'Ideal for large households' },
  { value: 500, label: 'Ultra (250+ Mbps)', description: 'Best for heavy usage and 4K streaming' }
]

export const USAGE_TYPES = [
  'Browsing and email',
  'Work and study',
  'Social media',
  'Online gaming',
  'Streaming video/TV/movies'
]

export const PRIORITIES = [
  { value: 'speed', label: 'Speed', icon: '⚡' },
  { value: 'price', label: 'Price', icon: '💰' },
  { value: 'reliability', label: 'Reliability', icon: '🔒' }
]