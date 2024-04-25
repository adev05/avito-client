import { io } from 'socket.io-client'

// "undefined" means the URL will be computed from the `window.location` object
const URL =
	process.env.SOCKET_URL || 'https://bc57-91-218-92-5.ngrok-free.app/chat'

export const socket = io(URL, {
	autoConnect: true,
})

socket.on('connect', () => {
	console.log(socket.id)
})

socket.on('disconnect', () => {
	console.log(socket.id)
})
