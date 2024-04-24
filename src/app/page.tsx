import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Home() {
	const session = (await getServerSession()) || {}

	if (Object.keys(session).length !== 0) {
		redirect('/profile')
	} else {
		redirect('/auth/signin')
	}
}
