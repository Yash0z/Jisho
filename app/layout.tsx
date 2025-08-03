import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Link from "next/link";

const nacelle = localFont({
	src: "../public/fonts/Nacelle-Regular.woff2",
	variable: "--font-nacelle",
});

const display = localFont({
	src: "../public/fonts/Nacelle-Black.woff2",
	variable: "--font-nacelle-Black",
});

export const metadata: Metadata = {
	title: "Jisho",
	description: "A simple, Personal Fmhy",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${nacelle.variable} ${display.variable} antialiased relative w-screen h-screen font-nacelle no-scrollbar`}
			>
				<div className='sticky  top-0 z-50 bg-background w-full px-10 h-15 border-b flex items-center'>
					<Link href='/' className='font-display'>
						Jisho
					</Link>
				</div>
				{children}
			</body>
		</html>
	);
}
