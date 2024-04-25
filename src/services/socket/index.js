import api from '@/config/axiosConfig'

export const getSocketResponse = async room => {
	try {
		const res = await api.get(room)
		return res.data
	} catch (error) {
		console.log(error)
	}
}
