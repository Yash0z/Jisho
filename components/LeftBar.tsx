"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import config from "@/configuration.json";

export default function LeftBar() {
	const pathname = usePathname();

	return (
		<>
			<div className='flex flex-col gap-6 text-[16px] text-foreground/60'>
				{config.Collections.map((collection) => {
					const crates = collection.all_crates
						? Object.values(collection.all_crates).filter(
								(crate) => crate !== ""
						  )
						: [];

					return (
						<div key={collection.idx} className='flex flex-col gap-2'>
							<Link
								href={collection.link}
								className='text-xs font-display text-foreground uppercase'
							>
								{collection.title}
							</Link>
							<div>
								{crates.map((crate, index) => (
									<Link
										key={index}
										href={`${collection.link}#${crate}`}
										className='block text-md pl-3 hover:text-white hover:border-white border-l-2'
									>
										{crate.charAt(0).toUpperCase() + crate.slice(1)}
									</Link>
								))}
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
