import { getFaviconUrl } from "@/utils/getFavicon";
import { MoveUpRight } from "lucide-react";

export const LinkLabel = ({
	sitename,
	url,
}: {
	sitename: string;
	url: string;
}) => {
	return (
		<div
			// key={index}
			className=' min-h-8 p-2 flex items-center w-full  cursor-pointer border hover:bg-white hover:text-black'
		>
			<div className='flex gap-3 item-center  p-1 w-[80%]'>
				<img
					src={getFaviconUrl(url) || "/default-favicon.png"}
					alt={`${sitename} favicon`}
					width={20}
					height={20}
					className='flex-shrink-0'
					onError={(e) => {
						e.currentTarget.style.display = "none";
					}}
				/>
            <span className='text-sm truncate'>{sitename.charAt(0).toUpperCase() + sitename.slice(1)}</span>
			</div>
			<div className='w-[20%]  h-full flex items-center justify-center'>
				<MoveUpRight size={20} />
			</div>
		</div>
	);
};
