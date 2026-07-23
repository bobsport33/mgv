import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

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
		<>
			{/* <!-- Google tag (gtag.js) --> */}
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-NLXVDGMJHX"
				strategy="afterInteractive"
			/>

			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-NLXVDGMJHX', {
						page_path: window.location.pathname,
					});
				`}
			</Script>

			<main
				className={`${bricolageGrotesque.variable} ${bodoniCyrillic.variable}`}
			>
				<Header />

				<Component {...pageProps} />

				<Footer />
			</main>
		</>
	);
}
