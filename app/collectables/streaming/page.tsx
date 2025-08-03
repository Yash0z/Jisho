import Scomp from "@/components/streaming/scomp";

export default function Streaming() {
	return (
		<>
			<div className='border mb-10'>
				<h1 className='scroll-m-20  text-4xl  tracking-tight text-balance mb-2'>
					Streaming
				</h1>
				<h2 className='text-muted-foreground  font-nacelle'>
					Choose from content all over the world{" "}
				</h2>
			</div>

			<div className='border'>
				<Scomp />
			</div>
		</>
	);
}
