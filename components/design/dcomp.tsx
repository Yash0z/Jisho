"use client";
import { MoveUpRight } from "lucide-react";

// Function to get favicon from URL
const getFaviconUrl = (url: string) => {
	try {
		const domain = new URL(url).hostname;
		return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
	} catch {
		return null;
	}
};

export default function Dcomp() {
	// Example data - replace with your actual streaming sites
	const streamingSites = [
		{ name: "Netflix", url: "https://netflix.com" },
		{ name: "YouTube", url: "https://youtube.com" },
		{ name: "Twitch", url: "https://twitch.tv" },
		{ name: "Disney+", url: "https://disneyplus.com" },
		{ name: "Hulu", url: "https://hulu.com" },
		{ name: "Prime Video", url: "https://primevideo.com" },
	];

	return (
		<div className='grid grid-cols-5 '>
			{streamingSites.map((site, index) => (
            <div
               key={index}
               className=' min-h-12 p-2 flex items-center justify-around gap-4  cursor-pointer border'
            >
               <img
                  src={getFaviconUrl(site.url) || "/default-favicon.png"}
                  alt={`${site.name} favicon`}
                  width={24}
                  height={24}
                  className='flex-shrink-0'
                  onError={(e) => {
                     e.currentTarget.style.display = "none";
                  }}
               />
               <span className='text-base truncate'>{site.name}</span>
               <div className='w-fit p-2 h-full'>
                  <MoveUpRight size={20} />
               </div>
            </div>
			))}
		</div>
	);
}
