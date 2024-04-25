import { toast } from 'sonner'
import http from '../../http-common'
import { socket } from './socket'
// import { socket } from './socket'

class ToastService {
	async createNotification(
		title: string,
		description: string,
		roles: string[],
		author: string
	) {
		const body = {
			title,
			description,
			roles_to: roles,
			author,
			date: '2022-01-01',
			isRead: false,
		}

		console.log(body)

		// const response = await http.post('/notification/create', body)

		// if (!response.data) return null
		socket.emit('chat', 'hello server')
		socket.on('chat', data => {
			console.log('from chat', data)
		})
		socket.emit('createNotification', body)

		socket.on('notification', data => {
			console.log(data)
			toast.info(data.title, {
				description: description,
			})
			return data
		})

		// console.log('response', response)
		// fetch(process.env.SERVER_URL + '/notification/create', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify(body),
		// })
		// 	.then(response => response.json())
		// 	.then(response => {
		// 		console.log(response)
		// 	})
		// 	.catch(error => {
		// 		console.log(error)
		// 	})
		// try {
		// 	// const response = await http.get('/notification/create')
		// 	fetch(process.env.SERVER_URL + '/notification/create', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 		body: JSON.stringify(body),
		// 	})
		// 		.then(response => {
		// 			console.log(response)
		// 		})
		// 		.catch(error => {
		// 			console.log(error)
		// 		})
		// 	// await http
		// 	// 	.post('/notification/32dsfsdfsdfsdf')
		// 	// 	.then(response => {
		// 	// 		console.log(response)
		// 	// 	})
		// 	// 	.catch(error => {
		// 	// 		console.log(error)
		// 	// 	})
		// 	// console.log(response)
		// 	// if (!response.data) return null

		// 	// console.log(response)

		// socket.emit('createNotification', data)

		// socket.on('notification', data => {
		// 	console.log(data)
		// 	toast.info(data.title, {
		// 		description: description,
		// 	})
		// 	return data
		// })
		// 	return null
		// 	// return response.data
		// } catch (e) {
		// 	console.log('e', e)
		// 	return null
		// }
	}
}

export default new ToastService()
