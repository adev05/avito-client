'use client'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Provider from '@/components/Provider'
import { Toaster } from '@/components/ui/sonner'

import { useEffect, useState } from 'react'
import { socket } from '@/services/socket'
import { toast } from 'sonner'

const inter = Montserrat({ subsets: ['latin'] })

// export const metadata: Metadata = {
// 	title: 'Avito',
// 	description: 'Avito notifications',
// 	authors: [
// 		{ name: 'Andrey', url: '@A_Grady' },
// 		{ name: 'Sergey', url: '@zefercka' },
// 	],
// }

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const [isConnected, setIsConnected] = useState(false)
	const [transport, setTransport] = useState('N/A')

	useEffect(() => {
		console.log('connected')
		if (socket.connected) {
			onConnect()
		}

		function onConnect() {
			console.log('connected')
			setIsConnected(true)
			setTransport(socket.io.engine.transport.name)

			socket.io.engine.on('upgrade', transport => {
				setTransport(transport.name)
			})
		}

		function onDisconnect() {
			setIsConnected(false)
			setTransport('N/A')
		}

		socket.on('connect', onConnect)
		socket.on('disconnect', onDisconnect)

		socket.on('notification', data => {
			console.log('Received notification:', data)
			toast.info(data.title, {
				description: data.description,
			})
		})

		return () => {
			socket.off('connect', onConnect)
			socket.off('disconnect', onDisconnect)
			socket.off('notification', () => {}) // remove the event listener when the component unmounts
		}
	}, [])

	return (
		<html lang='en'>
			<body className={inter.className}>
				<Provider>{children}</Provider>
				<Toaster richColors />
			</body>
		</html>
	)
}
