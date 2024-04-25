import { io } from 'socket.io-client'

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.SOCKET_URL || 'localhost:8081/chat'

export const socket = io(URL, {
	autoConnect: true,
})

socket.on('connect', () => {
	console.log(socket.id)
})

socket.on('disconnect', () => {
	console.log(socket.id)
})
