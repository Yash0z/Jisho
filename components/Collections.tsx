import { Bot, Tv } from "lucide-react";
import config from "@/configuration.json";
import { JSX } from "react";
import Card from "./Card";

// Map icon names to Lucide components
const icons: Record<string, JSX.Element> = {
	Bot: <Bot size={30} />,
	Tv: <Tv size={30} />,
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
