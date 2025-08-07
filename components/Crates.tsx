"use client";
import config from "@/configuration.json";
import { LinkLabel } from "./LinkLabel";

interface CollectionProps {
	collectionId: number;
	categoryName: string | undefined;
}

export default function Crates({
	collectionId,
	categoryName,
}: CollectionProps) {
	// Find collection by idx property
	const designCollection = config.Collections.find(
		(collection) => collection.idx === collectionId
	);
	type CratesKeys = string;

	const Crates = designCollection?.crates as
		| Partial<Record<CratesKeys, { name: string; link: string }[]>>
		| undefined;
	const crates = Crates?.[categoryName as CratesKeys];

	if (!crates || !categoryName) {
		return;
	}
	const CName = categoryName?.charAt(0)?.toUpperCase() + categoryName?.slice(1);
	return (
		<div className='mb-5'>
			<h1 id={categoryName} className='text-foreground/60 font-bold mb-4'>
				{CName}
			</h1>
			<div className='grid grid-cols-4 w-[82%] '>
				{crates.map((site, index) => (
					<LinkLabel key={index} sitename={site.name} url={site.link} />
				))}
			</div>
		</div>
	);
}
