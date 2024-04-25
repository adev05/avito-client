import { useCallback, useEffect, useState } from 'react'
import * as io from 'socket.io-client'

export const useSocket = (room, username) => {
	const [socket, setSocket] = useState()
	const [socketResponse, setSocketResponse] = useState({
		room: '',
		message: '',
		username: '',
		messageType: '',
		createdAt: '',
	})
	const [isConnected, setConnected] = useState(false)

	const sendData = useCallback(
		payload => {
			socket.emit('send_message', {
				room: room,
				message: payload.message,
				username: username,
				messageType: 'CLIENT',
			})
		},
		[socket, room]
	)

	useEffect(() => {
		const socketBaseUrl = process.env.SOCKET_URL || 'localhost:8081/chat'
		const s = io(socketBaseUrl, {
			query: `username=${username}&room=${room}`,
		})
		setSocket(s)
		s.on('connect', () => {
			setConnected(true)
		})
		s.on('connect_error', error => {
			console.error('SOCKET CONNECTION ERROR', error)
		})
		s.on('read_message', res => {
			setSocketResponse({
				room: res.room,
				message: res.message,
				username: res.username,
				messageType: res.messageType,
				createdAt: res.createdAt,
			})
		})

		return () => {
			s.disconnect()
		}
	}, [room, username])

	return { isConnected, socketResponse, sendData }
}
