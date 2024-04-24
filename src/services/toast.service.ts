import http from '../../http-common'

class ToastService {
	async create(
		title: string,
		description: string,
		roles_to: string[],
		author: number
	) {
		const data = {
			title,
			description,
			roles_to,
			author,
			date: new Date(),
			isRead: false,
		}
		try {
			const response = await http.post('/toast/create', data)

			if (!response.data) return null

			return response.data
		} catch (e) {
			return null
		}
	}
}

export default new ToastService()
