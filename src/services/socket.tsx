import { io } from 'socket.io-client'

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.SOCKET_URL || 'http://localhost:8081/chat'

export const socket = io(URL, {
	autoConnect: true,
	transports: ['websocket', 'polling', 'flashsocket'],
})
