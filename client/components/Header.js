/* This example requires Tailwind CSS v2.0+ */
const navigation = [
	{ name: "Crypto Prices", href: "#" },
	{ name: "News", href: "#" },
	{ name: "NFT", href: "#" },
	{ name: "Learn", href: "#" },
];

export default function Header() {
	return (
		<header className='bg-black'>
			<nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' aria-label='Top'>
				<div className='w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none'>
					<div className='flex items-center text-white text-3xl font-bold font-sans'>
						<a href='#'>CryptoCraze</a>
						<div className='hidden ml-10 space-x-8 lg:block'>
							{navigation.map((link) => (
								<a
									key={link.name}
									href={link.href}
									className='text-base font-medium text-white hover:text-indigo-50'>
									{link.name}
								</a>
							))}
						</div>
					</div>
					<div className='md:col-span-3 ml-10 space-x-4'>
						<a
							href='#'
							className='inline-block bg-purple py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75'>
							Login
						</a>
						<a
							href='#'
							className='inline-block bg-yellow py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50'>
							Join
						</a>
					</div>
				</div>
				<div className='py-4 flex flex-wrap justify-center space-x-6 lg:hidden'>
					{navigation.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className='text-base font-medium text-white hover:text-indigo-50'>
							{link.name}
						</a>
					))}
				</div>
			</nav>
		</header>
	);
}
