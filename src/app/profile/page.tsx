'use client'

import { Header } from '@/components/header/header'
import { Button } from '@/components/ui/button'
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default function Profile() {
	const session = useSession()
	const user = session.data?.user

	// console.log('session', session)
	return (
		<>
			<Header />
			<main className='container h-full flex flex-col mx-auto'>
				<div className='border rounded-3xl h-96 flex items-center justify-center flex-col gap-8 bg-gray-100'>
					<div className='flex items-center flex-col'>
						<Image
							src={'/avito-help-logo.png'}
							alt={'logo'}
							width={100}
							height={100}
							className='mb-6'
						/>
						<h1 className='text-3xl font-semibold mb-2'>
							Пуш-уведомления Авито
						</h1>
						<p className='text-gray-600 flex gap-1'>
							разработчики:
							<HoverCard>
								<HoverCardTrigger>
									<p className='text-black font-medium hover:underline cursor-pointer'>
										@A_Grady
									</p>
								</HoverCardTrigger>
								<HoverCardContent>Frontend developer</HoverCardContent>
							</HoverCard>
							,
							<HoverCard>
								<HoverCardTrigger>
									<p className='text-black font-medium hover:underline cursor-pointer'>
										@zefercka
									</p>
								</HoverCardTrigger>
								<HoverCardContent>Backend developer</HoverCardContent>
							</HoverCard>
						</p>
					</div>
					<Link href={'/profile/notifications'}>
						<Button variant={'outline'}>Перейти к уведомлениям</Button>
					</Link>
				</div>
			</main>
		</>
	)
}
