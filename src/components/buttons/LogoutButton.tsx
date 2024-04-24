'use client'

import { signOut } from 'next-auth/react'

import type { ClientSafeProvider } from 'next-auth/react'
import { Button } from '../ui/button'

export default function LogoutButton({ auth }: { auth?: ClientSafeProvider }) {
	return <Button onClick={() => signOut()}>Выйти</Button>
}
