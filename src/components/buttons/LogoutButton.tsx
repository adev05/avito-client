'use client'

import { signOut } from 'next-auth/react'

import type { ClientSafeProvider } from 'next-auth/react'
import { Button } from '../ui/button'

export default function LogoutButton({ auth }: { auth?: ClientSafeProvider }) {
	return (
		<Button
			className='bg-[#00aaff] hover:bg-[#0099f7]'
			onClick={() => signOut()}
			size={'sm'}
		>
			Выйти
		</Button>
	)
}
