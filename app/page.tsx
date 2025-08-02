import Collections from "@/components/Collections";
import DisplayText from "@/components/DisplayText";

export default function Home() {
	return (
		<>
			<main className='flex flex-col gap-30  mx-40 h-screen p-4 '>
				<div className='mt-8'>
					<DisplayText />
				</div>
				<div className='h-screen '>
					<Collections />
				</div>
			</main>
		</>
	);
}
