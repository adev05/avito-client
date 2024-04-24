'use client'

import LogoutButton from '@/components/buttons/LogoutButton'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'

export default function Protected() {
	// const session = await getServerSession()
	const session = useSession()
	const data = session.data

	console.log(data)
	return (
		<main className='max-w-2xl min-h-screen flex flex-col items-center mx-auto'>
			<div className='w-full flex justify-between my-10'>
				<h1 className='text-2xl font-bold'>Protected Page</h1>
				<LogoutButton />
			</div>
			<pre className='w-full bg-gray-200 p-4 rounded break-words whitespace-pre-wrap'>
				{JSON.stringify(data, null, 2)}
			</pre>
		</main>
	)
}
