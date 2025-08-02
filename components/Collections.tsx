import config from "@/configuration.json";
import { JSX } from "react";
import Card from "./Card";
import { Bot, Tv, Book, Gamepad, Music, Camera, Palette, Code, ShoppingCart, Globe, Heart, Leaf, Briefcase, Film } from "lucide-react";

// Map icon names to Lucide components
const icons: Record<string, JSX.Element> = {
   Bot: <Bot size={30} />,
   Tv: <Tv size={30} />,
   Book: <Book size={30} />,
   Gamepad: <Gamepad size={30} />,
   Music: <Music size={30} />,
   Camera: <Camera size={30} />,
   Palette: <Palette size={30} />,
   Code: <Code size={30} />,
   ShoppingCart: <ShoppingCart size={30} />,
   Globe: <Globe size={30} />,
   Heart: <Heart size={30} />,
   Leaf: <Leaf size={30} />,
   Briefcase: <Briefcase size={30} />,
   Film: <Film size={30} />,
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
