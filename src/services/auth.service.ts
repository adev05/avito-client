import http from '../../http-common'
// import userService from './user.service'

class AuthService {
	signUp() {}

	async signIn(username: string, password: string) {
		const body = {
			username,
			password,
		}
		try {
			const response = await http.post('/user/signin', body)

			// console.log('response', response.data)

			if (!response.data) return null

			response.data.role = response.data.role.roleName

			return response.data
		} catch (e) {
			return null
		}
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

const authService = new AuthService()

export default authService
