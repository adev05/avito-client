'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signIn, useSession } from 'next-auth/react'
import { redirect, useRouter } from 'next/navigation'
import { SyntheticEvent, useState } from 'react'

export default function SignIn() {
	const { data: session, status } = useSession()
	console.log('session', session)
	console.log('status', status)

	if (status === 'authenticated') {
		redirect('/profile')
	}

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const { push } = useRouter()

	async function onSubmit(event: SyntheticEvent) {
		event.preventDefault()

		if (!username && !password) {
			setError('Поля не могут быть пустыми')
			return
		}
		if (!username) {
			setError('Поле логин не может быть пустым')
			return
		}
		if (!password) {
			setError('Поле пароль не может быть пустым')
			return
		}

		const response = await signIn('avito-auth', {
			redirect: false,
			callbackUrl: '/profile',
			username,
			password,
		})
		console.log('response', response)
		if (response?.error) {
			setError('Неверный логин или пароль')
			return
		} else {
			push('/profile')
		}
	}

	return (
		<>
			<div className='container relative h-screen flex-col items-center justify-center flex'>
				<div className='lg:p-8'>
					<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
						<div className='flex flex-col space-y-2 text-center'>
							<h1 className='text-2xl font-semibold tracking-tight'>
								Авторизация
							</h1>
							<p className='text-sm text-muted-foreground'>
								Введите логин и пароль для авторизации
							</p>
						</div>
						<form onSubmit={onSubmit}>
							<div className='grid gap-2'>
								<div className='grid gap-1'>
									<Label className='sr-only' htmlFor='username'>
										Имя пользователя
									</Label>
									<Input
										id='username'
										placeholder='Введите имя пользователя'
										type='text'
										autoCapitalize='none'
										autoCorrect='off'
										value={username}
										onChange={e => setUsername(e.target.value)}
									/>
								</div>
								<div className='grid gap-1'>
									<Label className='sr-only' htmlFor='password'>
										Пароль
									</Label>
									<Input
										id='password'
										placeholder='Введите пароль'
										type='password'
										autoCapitalize='none'
										autoCorrect='off'
										value={password}
										onChange={e => setPassword(e.target.value)}
									/>
								</div>
								{error && <p className='text-red-500'>{error}</p>}
								<Button className='bg-[#00aaff] hover:bg-[#0099f7]'>
									Войти
								</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
