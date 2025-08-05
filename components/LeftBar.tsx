"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import config from "@/configuration.json";

export default function LeftBar() {
	const pathname = usePathname();
	const designCollection = config.Collections.find(
		(collection) => collection.idx === 1
	);
	const crates = designCollection
		? Object.keys(designCollection.all_crates)
		: [];

	return (
		<>
			<div className='flex flex-col gap-2 text-[16px] text-foreground/60'>
				<Link
					href={designCollection?.link || "/collectables/design"}
					className='text-xs font-display text-foreground uppercase'
				>
					{designCollection?.title}
				</Link>
				<div>
					{crates.map((crate, index) => (
						<Link
							key={index}
							href={`${designCollection?.link}#${crate}`}
							className='block text-md pl-3 hover:text-white hover:border-white border-l-2'
						>
							{crate.charAt(0).toUpperCase() + crate.slice(1)}
						</Link>
					))}
				</div>
			</div>
		</>
	);
}
