import { io, Socket } from 'socket.io-client'

let socket: Socket | null = null

export function getSocket() {
  if (!socket) {
    try {
      socket = io(import.meta.env.VITE_SOCKET_URL || '/', { autoConnect: false })
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
  return new Promise<Socket>((resolve) => {
    s.once('connect', () => resolve(s))
    s.connect()
  })
}
