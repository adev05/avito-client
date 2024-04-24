import http from '../../http-common'
// import userService from './user.service'

class AuthService {
	signUp() {}

	async signIn(username: string, password: string) {
		const body = {
			username,
			password,
		}
		console.log('body:', body)
		// const response = await http.post('/auth/signIn', body)
		// console.log(response)

		// if (response.data.accessToken) {
		// 	localStorage.setItem('user', JSON.stringify(response.data))
		// }

		const user = {
			id: '1',
			name: username,
			role: 'admin',
		}
		console.log(user)
		return user
		// return response.data
	}

	// async logout() {
	// 	localStorage.removeItem('user')
	// }

	// async getCurrentUser() {
	// 	const user = localStorage.getItem('user')
	// 	if (!user) return null

	// 	const accessToken = JSON.parse(user).accessToken || ''
	// 	if (accessToken) {
	// 		http.defaults.headers.common['x-access-token'] = accessToken
	// 	}
	// 	const response = await userService.getModeratorBoard()

	// 	if (user && response) return JSON.parse(user)

	// 	return null
	// }
}

export default new AuthService()
