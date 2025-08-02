interface CardProps {
	icon: React.ReactNode; // icon is now a React node/component
	title: string;
	description: string;
	link?: string;
}

export default function Card({ link, icon, title, description }: CardProps) {
	return (
		<>
			<div className='relative p-6 border max-h-50 overflow-hidden hover:bg-white hover:text-black group'>
				{icon}
				<h1 className='font-bold text-md mt-5 mb-1'>{title}</h1>
				<h1 className='text-xs text-muted-foreground group-hover:text-black'>
					{description}
				</h1>
			</div>
		</>
	);
}
