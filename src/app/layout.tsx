import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Provider from '@/components/Provider'
import { Toaster } from '@/components/ui/sonner'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Avito',
	description: 'Avito notifications',
	authors: [
		{ name: 'Andrey', url: '@A_Grady' },
		{ name: 'Sergey', url: '@zefercka' },
	],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Provider>{children}</Provider>
				<Toaster richColors />
			</body>
		</html>
	)
}
