"use client";
import config from "@/configuration.json";
import { LinkLabel } from "../LinkLabel";

export default function Dcomp() {
	const designCollection = config.Collections[2];
	const fonts = designCollection?.referrals?.fonts;

	console.log("Design collection:", designCollection);
	console.log("Fonts array:", fonts);

	if (!fonts || fonts.length === 0) {
		return <div>No fonts data found</div>;
	}

	return (
		<div className='grid grid-cols-4 w-[82%] '>
			{fonts.map((site, index) => (
				<LinkLabel key={index} sitename={site.name} url={site.link} />
			))}
		</div>
	);
}
