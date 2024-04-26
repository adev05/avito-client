import axios from 'axios'

const SOCKET_URL = process.env.SOCKET_URL || 'http://localhost:8081/chat'

console.log(SOCKET_URL)

const api = axios.create({
	baseURL: SOCKET_URL,
})

export default api
