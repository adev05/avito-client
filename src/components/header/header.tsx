import Link from 'next/link'
import LogoutButton from '../buttons/LogoutButton'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'

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
	return <></>
}

export const Header = () => {
	const pathname = usePathname()
	const session = useSession()
	const data = session.data

	console.log(pathname)
	return (
		<header className='h-16 border-b mb-8'>
			<div className='container flex items-center h-full justify-between'>
				<p>Avito</p>
				<div className='flex gap-4'>
					<UserLinks pathname={pathname} />
					{data?.role === 'admin' ? (
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
