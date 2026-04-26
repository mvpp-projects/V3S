import { io, Socket } from 'socket.io-client'
import { API_BASE } from './auth'

let socket: Socket | null = null

function getDefaultSocketUrl(): string {
  try {
    return new URL(API_BASE).origin
  } catch {
    return 'http://localhost:3001'
  }
}

export function getSocket() {
  if (!socket) {
    try {
      socket = io(import.meta.env.VITE_SOCKET_URL || getDefaultSocketUrl(), {
        autoConnect: false,
        timeout: 6000
      })
    } catch (err) {
      console.warn('Socket init failed', err)
    }
  }
  return socket
}

export async function safeConnect() {
  const s = getSocket()
  if (!s) return null
  if (s.connected) return s

  return new Promise<Socket | null>((resolve) => {
    const onConnect = () => {
      cleanup()
      resolve(s)
    }
    const onError = (err: unknown) => {
      cleanup()
      console.warn('Socket connect failed', err)
      resolve(null)
    }
    const onTimeout = () => {
      cleanup()
      console.warn('Socket connect timed out')
      resolve(null)
    }
    const cleanup = () => {
      clearTimeout(timer)
      s.off('connect', onConnect)
      s.off('connect_error', onError)
    }

    const timer = setTimeout(onTimeout, 7000)
    s.on('connect', onConnect)
    s.on('connect_error', onError)
    s.connect()
  })
}
