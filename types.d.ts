import type { DefaultUser } from 'next-auth'

declare module 'next-auth' {
	interface Session {
		user?: DefaultUser & {
			id: string
			username: string
			role: string
		}
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		uid: string
		username: string
		role: string
	}
}
