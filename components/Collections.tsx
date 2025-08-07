import config from "@/configuration.json";
import { JSX } from "react";
import Card from "./Card";
import { Palette, Bot, PanelsTopLeft } from "lucide-react";

// Map icon names to Lucide components
const icons: Record<string, JSX.Element> = {
	Palette: <Palette size={30} />,
	PanelsTopLeft: <PanelsTopLeft size={30} />,
	Bot: <Bot size={30} />,
};

export default function Collections() {
	return (
		<div className='grid grid-cols-4'>
			{config.Collections.map((item: any) => (
				<Card
					key={item.idx}
					icon={icons[item.icon]}
					title={item.title}
					description={item.description}
					link={item.link}
				/>
			))}
		</div>
	);
}
