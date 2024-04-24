import authService from '@/services/auth.service'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

declare module 'next-auth' {
	interface Session {
		id: number
		username: string
		role: string
	}
}

export const authOptions = {
	providers: [
		CredentialsProvider({
			id: 'avito-auth',
			name: 'Avito auth',

			credentials: {
				username: { label: 'username', type: 'text' },
				password: { label: 'password', type: 'password' },
			},
			async authorize(credentials, req) {
				console.log(credentials)

				const response = await authService.signIn(
					credentials.username,
					credentials.password
				)

				if (!response) return null

				console.log('response', response)

				if (response) {
					return response
				} else {
					return null
				}
			},
		}),
	],

	callbacks: {
		async session({ session, token, user }) {
			console.log('session', session, 'token', token, 'user', user)
			if (token) {
				session.name = token.name
				session.role = token.role
			}
			return session
		},
		async jwt({ token, user, account, profile, isNewUser }) {
			console.log(
				'token',
				token,
				'user',
				user,
				'account',
				account,
				'profile',
				profile,
				'isNewUser',
				isNewUser
			)
			if (user) {
				token.name = user.name
				token.role = user.role
			}
			return token
		},

		async signIn(userDetail) {
			if (Object.keys(userDetail).length === 0) {
				return false
			}
			return true
		},
		async redirect({ baseUrl }) {
			return `${baseUrl}/protected`
		},
	},

	pages: {
		signIn: '/auth/signin',
		error: '/auth/error',
	},
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
