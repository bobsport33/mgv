import "@/styles/globals.css";
import type { AppProps } from "next/app";

import localFont from "next/font/local";
import { Bricolage_Grotesque } from "next/font/google";

import Header from "@/modules/Header/Index";
import Footer from "@/modules/Footer/Index";

const bricolageGrotesque = Bricolage_Grotesque({
	subsets: ["latin"],
	variable: "--font-bricolage-grotesque"
});

const bodoniCyrillic = localFont({
	src: "../fonts/BodoniCyrillic.ttf",
	variable: "--font-bodoni-cyrillic"
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main
			className={`${bricolageGrotesque.variable} ${bodoniCyrillic.variable}`}
		>
			<Header />

			<Component {...pageProps} />

			<Footer />
		</main>
	);
}
