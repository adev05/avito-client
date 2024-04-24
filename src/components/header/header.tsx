import Link from 'next/link'
import LogoutButton from '../buttons/LogoutButton'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const UserLinks = ({ pathname }: { pathname: string }) => {
	return (
		<>
			<Link
				href={'/profile'}
				className={pathname === '/profile' ? 'font-semibold text-gray-800' : ''}
			>
				Главная
			</Link>
		</>
	)
}
const EmlpoyeeLinks = ({ pathname }: { pathname: string }) => {
	return (
		<Link
			href={'/profile/notifications'}
			className={
				pathname === '/profile/notifications'
					? 'font-semibold text-gray-800'
					: ''
			}
		>
			Уведомления
		</Link>
	)
}

const AdminLinks = ({ pathname }: { pathname: string }) => {
	return (
		<Link
			href={'/profile/admin'}
			className={
				pathname === '/profile/admin' ? 'font-semibold text-gray-800' : ''
			}
		>
			Админ-панель
		</Link>
	)
}

export const Header = () => {
	const pathname = usePathname()
	const session = useSession()
	const user = session.data?.user

	return (
		<header className='h-16 border-b mb-8'>
			<div className='container flex items-center h-full justify-between'>
				{/* <p>Avito</p> */}
				<Link href={'/profile'}>
					<Image src='/avito-logo.svg' alt='logo' width={80} height={50} />
				</Link>
				<div className='gap-4 hidden sm:flex'>
					<UserLinks pathname={pathname} />
					{user?.role === 'admin' ? (
						<>
							<EmlpoyeeLinks pathname={pathname} />
							<AdminLinks pathname={pathname} />
						</>
					) : (
						<EmlpoyeeLinks pathname={pathname} />
					)}
				</div>
				<LogoutButton />
			</div>
		</header>
	)
}
