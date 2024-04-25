import http from '../../http-common'
import { socket } from './socket'

class ToastService {
	async createNotification(
		title: string,
		description: string,
		roles: string[],
		author: string
	) {
		const data = {
			title,
			description,
			roles_to: roles,
			author,
			date: new Date(),
			isRead: false,
		}
		try {
			const response = await http.post('/toast/create', data)

			if (!response.data) return null

			socket.emit('createNotification', data)

			socket.on('notification', data => {
				console.log(data)
				return data
			})

			return response.data
		} catch (e) {
			return null
		}
	}
}

export default new ToastService()
