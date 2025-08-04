"use client";
import { useEffect, useState } from "react";
import { SlidingNumber } from "./motion-primitives/sliding-number";

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

export function State() {
	const now = new Date();
	const [hours, setHours] = useState(now.getHours());
	const [minutes, setMinutes] = useState(now.getMinutes());
	const [seconds, setSeconds] = useState(now.getSeconds());
	const [date, setDate] = useState(now);

	useEffect(() => {
		const interval = setInterval(() => {
			const current = new Date();
			setHours(current.getHours());
			setMinutes(current.getMinutes());
			setSeconds(current.getSeconds());
			setDate(current);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const weekday = WEEKDAYS[date.getDay()];
	const day = date.getDate();
	const month = MONTHS[date.getMonth()];

	return (
		<div className='flex items-center justify-center gap-3 font-mono text-[14px]'>
			<div>
				{weekday} {day} {month} &nbsp;
			</div>
			<div className='flex items-center gap-0.5'>
				<SlidingNumber value={hours} padStart={true} />
				<span className='text-zinc-500'>:</span>
				<SlidingNumber value={minutes} padStart={true} />
				<span className='text-zinc-500'>:</span>
				<SlidingNumber value={seconds} padStart={true} />
			</div>
		</div>
	);
}
