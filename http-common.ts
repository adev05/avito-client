import axios from 'axios'

export default axios.create({
	baseURL: process.env.SERVER_URL
		? process.env.SERVER_URL
		: 'localhost:8080/api',
	headers: {
		'Content-type': 'application/json',
	},
})
