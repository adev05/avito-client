import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default function Home() {
	const session = getServerSession() || {}

	if (Object.keys(session).length !== 0) {
		redirect('/profile')
	} else {
		redirect('/auth/signin')
	}
}
