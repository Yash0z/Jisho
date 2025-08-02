import LeftBar from "@/components/LeftBar";

export default function CollectablesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='grid grid-cols-[1fr_5fr]  h-screen'>
			<div className=' fixed border p-5 overflow-y-scroll'> 

         </div>
			<div className=' fixed border p-5'> {children}</div>
		</div>
	);
}
