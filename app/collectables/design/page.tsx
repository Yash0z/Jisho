const MetaData = {
	collectionId: config.Collections[0].idx,
	category_1: config.Collections[0].all_crates.fonts,
	category_2: config.Collections[0].all_crates.inspiration,
};


import config from "@/configuration.json";
import Crates from "@/components/Crates";
export default function Design() {
	return (
		<>
			<div className='mb-10'>
				<h1 className='scroll-m-20  text-4xl  tracking-tight text-balance mb-2'>
					Design
				</h1>
				<h2 className='text-muted-foreground  font-nacelle'>
					Collection of usefull design resources
				</h2>
			</div>
			<div className=''>
				<Crates
					collectionId={MetaData.collectionId}
					categoryName={MetaData.category_1}
				/>
				<Crates
					collectionId={MetaData.collectionId}
					categoryName={MetaData.category_2}
				/>
			</div>
		</>
	);
}
