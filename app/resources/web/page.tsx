import config from "@/configuration.json";
import Crates from "@/components/Crates";

export default function Web() {
	return (
		<>
			<div className='mb-10'>
				<h1 className='scroll-m-20  text-4xl  tracking-tight text-balance mb-2'>
					Web
				</h1>
				<h2 className='text-muted-foreground  font-nacelle'>
					Collection of useful web resources
				</h2>
			</div>
			<div className=''>
				<Crates
					collectionId={config.Collections[2].idx}
					categoryName={config.Collections[2].all_crates["crate-1"]}
				/>
				<Crates
					collectionId={config.Collections[2].idx}
					categoryName={config.Collections[2].all_crates["crate-2"]}
				/>
				<Crates
					collectionId={config.Collections[2].idx}
					categoryName={config.Collections[2].all_crates["crate-3"]}
				/>
				<Crates
					collectionId={config.Collections[2].idx}
					categoryName={config.Collections[2].all_crates["crate-4"]}
				/>
			</div>
		</>
	);
}
