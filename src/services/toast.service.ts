import { toast } from 'sonner'
import http from '../../http-common'
// import { socket } from './socket'
import { socket } from './socket'
// import { useSocket } from '@/hooks/useSocket'
import { DefaultUser } from 'next-auth'
// import { getSocketResponse } from '@/services/socket/index'

class ToastService {
	private notificationListener: ((data: any) => void) | undefined

	async createNotification(
		title: string,
		description: string,
		roles: string[],
		author: DefaultUser & {
			id: string
			username: string
			role: string
		}
	) {
		const body = {
			title,
			description,
			roles_to: roles,
			author: author.id,
			date: '2022-01-01',
			isRead: false,
		}

		socket.emit('createNotification', body)
	}
}

export default new ToastService()
