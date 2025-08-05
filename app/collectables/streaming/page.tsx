const MetaData = {
	collectionId: 2,
	category1: "",
	category2: "",
};

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
				<Crates collectionId={2} categoryName={MetaData.category1} />
				<Crates collectionId={2} categoryName={MetaData.category2} />
			</div>
		</>
	);
}
