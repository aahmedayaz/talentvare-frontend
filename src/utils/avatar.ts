import { createAvatar } from '@dicebear/core'
import { micah } from '@dicebear/collection'

export type AvatarOptions = {
  seed: string
  size?: number
}

export function generateAvatarDataUri({ seed, size = 64 }: AvatarOptions): string {
  const svg = createAvatar(micah, {
    seed,
  }).toString()

  const encoded = encodeURIComponent(svg)
  return `data:image/svg+xml;charset=utf-8,${encoded}`
}


