import Collections from "@/components/Collections";
import DisplayText from "@/components/DisplayText";

export default function Home() {
	return (
		<>
			<main className='flex flex-col gap-30 mx-5 xl:mx-30 h-fit p-4 no-scrollbar'>
				<div className='mt-8 ml-2'>
					<DisplayText />
				</div>
				<div className='h-screen '>
					<Collections />
				</div>
			</main>
		</>
	);
}
