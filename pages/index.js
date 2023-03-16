import Head from "next/head";
import Section from "../components/section/section";
import Hero from "../components/hero/hero";
import Card from "../components/card/card";
import MainNav from "../components/navigation/navigation";

export default function Home() {
	return (
		<>
			<Head>
				<title>Get Tokenized</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<header className='masthead'>
				<div className='masthead__wrapper'>
					<a href='/'>
						<img alt='Your Logo' src='/Logo.svg' />
					</a>
					<MainNav />
				</div>
			</header>
			<main>
				{/* hero section */}
				<Section type='hero'>
					<Hero />
				</Section>

				<Section type='page' heading='From the Blog'>
					<Card
						imgSrc='img/tsr01.png'
						category='Blog'
						catTarget='#'
						heading='Headline, Ladies'
						paragraph='Our culture is dominated by efforts to score points and win arguments. But do we really talk anymore?'
						linkTarget='http://bitgrip.com'
					/>
					<Card
						imgSrc='img/tsr02.png'
						category='Design'
						catTarget='#'
						heading='Nicholas Humphrey’s Beautiful Theory of Mind'
						paragraph='Our culture is dominated by efforts to score points and win arguments. But do we really talk anymore?'
						linkTarget='http://bitgrip.com'
					/>
					<Card
						imgSrc='img/tsr03.png'
						category='Culture'
						catTarget='#'
						heading='Winning Tactics For TOKEN DESIGN'
						paragraph='Our culture is dominated by efforts to score points and win arguments. But do we really talk anymore?'
						linkTarget='http://bitgrip.com'
					/>
					<Card
						imgSrc='img/tsr04.png'
						category='Tech & Dev'
						catTarget='#'
						heading='Little Known Ways To Rid Yourself Of the Grid'
						paragraph='Our culture is dominated by efforts to score points and win arguments. But do we really talk anymore?'
						linkTarget='http://bitgrip.com'
					/>
					<Card
						imgSrc='img/tsr05.png'
						category='Design'
						catTarget='#'
						heading='The Hidden Mystery Behind Design Tokens'
						paragraph='Our culture is dominated by efforts to score points and win arguments. But do we really talk anymore?'
						linkTarget='http://bitgrip.com'
					/>
				</Section>
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
