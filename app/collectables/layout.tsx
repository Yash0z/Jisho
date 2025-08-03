import LeftBar from "@/components/LeftBar";

export default function CollectablesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className=''>
			<div className='fixed left-0 h-screen w-64 border p-5 overflow-y-auto z-40'>
				<LeftBar />
			</div>
			<div className='flex-1  p-10 ml-64'>{children}</div>
		</div>
	);
}
