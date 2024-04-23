import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
	providers: [
		CredentialsProvider({
			id: 'avito-auth',
			name: 'Avito auth',

			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' }

				if (user) {
					return user
				} else {
					return null
				}
			},
		}),
	],

	callbacks: {
		async session({ session, token, user }) {
			return session
		},
		async jwt({ token, user, account, profile, isNewUser }) {
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
