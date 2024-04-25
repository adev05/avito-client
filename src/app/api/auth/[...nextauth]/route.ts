import authService from '@/services/auth.service'
import NextAuth, { AuthOptions, NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			id: 'avito-auth',
			name: 'Avito auth',

			credentials: {
				username: { label: 'username', type: 'text' },
				password: { label: 'password', type: 'password' },
			},
			async authorize(credentials, req) {
				try {
					// console.log(credentials)

					if (!credentials) return null

					const response = await authService.signIn(
						credentials.username,
						credentials.password
					)

					if (!response) return null

					// console.log('response_auth', response)

					if (response) {
						return response
					} else {
						return null
					}
				} catch (e) {
					return null
				}
			},
		}),
	],

	callbacks: {
		async session({ session, token }) {
			if (session?.user) {
				session.user.id = token.uid
				session.user.username = token.username
				session.user.role = token.role
			}
			return session
		},
		async jwt({ token, user }) {
			if (user) {
				token.uid = user.id
				token.username = user.username
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
			return `${baseUrl}/profile`
		},
	},
	session: {
		strategy: 'jwt',
	},

	pages: {
		signIn: '/auth/signin',
		error: '/auth/error',
	},
	secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
