'use client'

import { Header } from '@/components/header/header'
import { useSession } from 'next-auth/react'

export default function Profile() {
	// const session = await getServerSession()
	const session = useSession()
	const data = session.data

	console.log(data)
	return (
		<>
			<Header />
			<main className='container h-full flex flex-col mx-auto'>
				<h1 className='text-xl font-bold mb-4'>
					Добро пожаловать, {data?.username}
				</h1>
				<pre className=' bg-gray-200 p-4 rounded break-words whitespace-pre-wrap'>
					{JSON.stringify(data, null, 2)}
				</pre>
			</main>
		</>
	)
}
