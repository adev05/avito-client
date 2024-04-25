import axios from 'axios'

export default axios.create({
	baseURL: process.env.SERVER_URL
		? process.env.SERVER_URL
		: 'https://bfd0-91-218-92-5.ngrok-free.app/api',
	headers: {
		'Content-type': 'application/json',
	},
})
