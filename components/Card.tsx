interface CardProps {
	icon: React.ReactNode; // icon is now a React node/component
	title: string;
	description: string;
	link?: string;
}

export default function Card({ link, icon, title, description }: CardProps) {
	return (
		<>
			<div className='p-6 border max-h-60 overflow-hidden hover:bg-white'>
				{icon}
				<h1 className='font-bold text-md mt-4 mb-1'>{title}</h1>
				<h1 className='text-sm text-muted-foreground'>{description}</h1>
			</div>
		</>
	);
}
