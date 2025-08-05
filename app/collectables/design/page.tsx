import { DesignMD } from "@/app/options";
import Crates from "@/components/Crates";

export default function Design() {
	console.log("Full DesignMD object:", DesignMD);
	console.log("DesignMD.crate1:", DesignMD.category_1);
	console.log("DesignMD.crate2:", DesignMD.category_2);
	console.log("DesignMD.collectionId:", DesignMD.collectionId);

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
					collectionId={DesignMD.collectionId}
					categoryName={DesignMD.category_1}
				/>
				<Crates
					collectionId={DesignMD.collectionId}
					categoryName={DesignMD.category_2}
				/>
			</div>
		</>
	);
}
