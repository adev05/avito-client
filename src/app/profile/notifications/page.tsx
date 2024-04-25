'use client'

import { Header } from '@/components/header/header'
import { useSession } from 'next-auth/react'

export default function NotificationsPage() {
	const notifications = [
		{
			id: 1,
			title: 'Заголовок уведомления 1',
			description: 'Описание уведомления 1',
			date: Date(),
			isRead: true,
			author: 1,
			role_to: 'admin',
		},
		{
			id: 2,
			title: 'Заголовок уведомления 2',
			description: 'Описание уведомления 2',
			date: '2022-02-01',
			isRead: true,
			author: 1,
			role_to: 'admin',
		},
		{
			id: 3,
			title: 'Заголовок уведомления 3',
			description: 'Описание уведомления 3',
			date: '2022-03-01',
			isRead: true,
			author: 1,
			role_to: 'admin',
		},
		{
			id: 4,
			title: 'Заголовок уведомления 4',
			description: 'Описание уведомления 4',
			date: '2022-04-01',
			isRead: true,
			author: 1,
			role_to: 'admin',
		},
		{
			id: 5,
			title: 'Заголовок уведомления 5',
			description: 'Описание уведомления 5',
			date: '2022-05-01',
			isRead: false,
			author: 1,
			role_to: 'admin',
		},
		{
			id: 6,
			title: 'Заголовок уведомления 6',
			description: 'Описание уведомления 6',
			date: '2022-06-01',
			isRead: true,
			author: 1,
			role_to: 'admin',
		},
		{
			id: 7,
			title: 'Заголовок уведомления 7',
			description: 'Описание уведомления 7',
			date: '2022-07-01',
			isRead: true,
			author: 1,
			role_to: 'admin',
		},
		{
			id: 8,
			title: 'Заголовок уведомления 8',
			description: 'Описание уведомления 8',
			date: '2022-08-01',
			isRead: false,
			author: 1,
			role_to: 'admin',
		},
		{
			id: 9,
			title: 'Заголовок уведомления 9',
			description: 'Описание уведомления 9',
			date: '2022-09-01',
			isRead: true,
			author: 1,
			role_to: 'admin',
		},
		{
			id: 10,
			title: 'Заголовок уведомления 10',
			description: 'Описание уведомления 10',
			date: '2022-10-01',
			isRead: false,
			author: 1,
			role_to: 'admin',
		},
	]

	return (
		<>
			<Header />
			<main className='container'>
				<h1 className='text-xl font-bold mb-4'>Уведомления</h1>
				{notifications.length > 0 && (
					<div className='mb-4'>
						<h5 className='text-md text-gray-600 mb-2'>История уведомлений</h5>
						<div className='flex gap-2 w-full flex-wrap'>
							{notifications.map(notification => (
								<div
									key={notification.id}
									className={
										'py-2 px-4 border cursor-pointer rounded-md md:w-[calc((100%-1rem)/2)] xl:w-[calc((100%-1.5rem)/4)] w-full transition-all' +
										(notification.isRead
											? ' bg-gray-100'
											: ' hover:border-gray-400')
									}
								>
									<p className='text-gray-600 text-sm mb-1'>
										{new Date(notification.date).toLocaleDateString('ru-RU', {
											day: 'numeric',
											month: 'long',
											year: 'numeric',
										})}
									</p>
									<p className='text-md font-medium'>{notification.title}</p>
									<p className='text-sm'>{notification.description}</p>
								</div>
							))}
						</div>
					</div>
				)}
				{/* {user?.role === 'admin' && (
					
				)} */}
			</main>
		</>
	)
}
