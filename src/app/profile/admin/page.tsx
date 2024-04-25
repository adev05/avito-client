'use client'

import { Header } from '@/components/header/header'
import {
	AutosizeTextAreaRef,
	AutosizeTextarea,
} from '@/components/ui/autosize-textarea'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import MultipleSelector, {
	MultipleSelectorRef,
	Option,
} from '@/components/ui/multiple-selector'
import toastService from '@/services/toast.service'
import { useSession } from 'next-auth/react'
import { SyntheticEvent, useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

export default function Page() {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const refMultipleSelectorRef = useRef<MultipleSelectorRef>(null)
	const OPTIONS: Option[] = [
		{ label: 'Пользователь', value: 'user' },
		{ label: 'Сотрудник', value: 'employee' },
		{ label: 'Администратор', value: 'admin' },
	]

	const session = useSession()
	const user = session.data?.user

	const onSubmit = async (event: SyntheticEvent) => {
		event.preventDefault()

		const roles = refMultipleSelectorRef.current?.selectedValue.map(
			item => item.value
		)

		console.log(title, description, roles, user)

		if (!title || !description || !roles || roles?.length === 0 || !user?.id) {
			toast.error('Ошибка!', {
				description: 'Поля должны быть заполнены',
			})
			return
		}

		await toastService
			.createNotification(title, description, roles, user)
			.then(() => {
				toast.success('Успешно!', {
					description: 'Уведомление создано',
				})
			})
			.catch(() => {
				toast.error('Ошибка!', {
					description: 'Не удалось создать уведомление',
				})
			})

		// console.log('response', response)

		// toast.info('Успешно', {
		// 	description: 'description',
		// })

		// toast('Event has been created', {
		// 	description: 'Sunday, December 03, 2023 at 9:00 AM',
		// 	action: {
		// 		label: 'Undo',
		// 		onClick: () => console.log('Undo'),
		// 	},
		// })
	}

	const refAutosizeTextAreaRef = useRef<AutosizeTextAreaRef>(null)
	const [currMaxHeight, setCurrMaxHeight] = useState(0)
	useEffect(() => {
		if (refAutosizeTextAreaRef.current) {
			setCurrMaxHeight(refAutosizeTextAreaRef.current.maxHeight)
		}
	}, [])
	return (
		<>
			<Header />
			<div className='container'>
				<h1 className='text-xl font-bold mb-4'>Панель управления</h1>
				<h5 className='text-md text-gray-600 mb-2'>Создание уведомлений</h5>
				<form className='flex gap-x-2 flex-wrap' onSubmit={onSubmit}>
					<Input
						className='mb-2 md:w-[calc((100%-0.5rem)/2)] xl:w-[calc((100%-1.5rem)/4)]'
						placeholder='Заголовок'
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
					<AutosizeTextarea
						className='mb-2 md:w-[calc((100%-0.5rem)/2)] xl:w-[calc((100%-1.5rem)/4)]'
						maxHeight={250}
						placeholder='Описание'
						value={description}
						ref={refAutosizeTextAreaRef}
						onChange={e => setDescription(e.target.value)}
					/>
					<div className='w-full xl:w-[calc((100%-1.5rem)/2)]'>
						<MultipleSelector
							defaultOptions={OPTIONS}
							placeholder='Выберите роли'
							ref={refMultipleSelectorRef}
							emptyIndicator={
								<p className='text-center text-lg leading-10 text-gray-600 dark:text-gray-400'>
									Ничего не найдено.
								</p>
							}
						/>
					</div>
					<Button className='w-full bg-[#00aaff] hover:bg-[#0099f7]'>
						Создать
					</Button>
				</form>
			</div>
		</>
	)
}
