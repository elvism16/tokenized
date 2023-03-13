import Head from "next/head";
import Notification from "../components/notification/notification";
import Section from "../components/section/section";
import Hero from "../components/hero/hero";
import Button from "../components/button/button";

export default function Home() {
	return (
		<>
			<Head>
				<title>Get Tokenized</title>
				<link rel='icon' href='/favicon.ico' />
				<link
					href='https://fonts.cdnfonts.com/css/mona-sans'
					rel='stylesheet'
				/>
			</Head>
			<header>
				<a href='/'>
					<img alt='Your Logo' src='/Logo.svg' />
				</a>
			</header>
			<main>
				{/* hero section */}
				<Section type='hero'>
					<Hero />
				</Section>

				{/* <p className={styles.description}>
					Get started by editing <code>pages/index.js</code>
				</p> */}
			</main>

			<footer>Footer</footer>

			{/* <style jsx>{`
				main {
					padding: 5rem 0;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
				footer {
					width: 100%;
					height: 100px;
					border-top: 1px solid #eaeaea;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				footer img {
					margin-left: 0.5rem;
				}
				footer a {
					display: flex;
					justify-content: center;
					align-items: center;
					text-decoration: none;
					color: inherit;
				}
			`}</style> */}
		</>
	);
}
