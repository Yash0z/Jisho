import config from "@/configuration.json";
import { MoveUpRight } from "lucide-react";

export default function Scomp() {
	return (
		<div className='grid grid-cols-6'>
			<div className='border min-h-10 p-1 flex items-center justify-around gap-4'>
				<span>Canva</span>
				<div className="w-fit p-2 h-full">
					<MoveUpRight size={20} />
				</div>
			</div>
         <div className='border min-h-10 p-1 flex items-center justify-around gap-4'>
				<span>Canva</span>
				<div className="w-fit p-2 h-full">
					<MoveUpRight size={20} />
				</div>
			</div>
         <div className='border min-h-10 p-1 flex items-center justify-around gap-4'>
				<span>Canva</span>
				<div className="w-fit p-2 h-full">
					<MoveUpRight size={20} />
				</div>
			</div>
         <div className='border min-h-10 p-1 flex items-center justify-around gap-4'>
				<span>Canva</span>
				<div className="w-fit p-2 h-full">
					<MoveUpRight size={20} />
				</div>
			</div>
         <div className='border min-h-10 p-1 flex items-center justify-around gap-4'>
				<span>Canva</span>
				<div className="w-fit p-2 h-full">
					<MoveUpRight size={20} />
				</div>
			</div>
         
		</div>
	);
}
