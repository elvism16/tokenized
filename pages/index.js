import Head from "next/head";
import Header from "../components/header/header";
import Section from "../components/section/section";
import Hero from "../components/hero/hero";
import Card from "../components/card/card";
import Benefits from "../components/benefits/benefits";
import Mission from "../components/mission/mission";
import Showcase from "../components/showcase/showcase";
import Footer from "../components/footer/footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Get Tokenized</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main>
				{/* hero section */}
				<Section type='hero'>
					<Hero
						btnLabelPrimary="What's a token?"
						btnLabelSecondary='Get in touch'
					/>
				</Section>

				{/* OUR MISSION */}

				<Section type='single' heading='Bring your design system to life'>
					<Mission
						heading='Build a design system you can use — fast'
						paragraph='Building and maintaining a design system can feel like an impossible challenge. Knapsack gives teams a jump start by providing the core infrastructure and platform needed to get to value quickly, with best practices baked into the platform.'
						btnLabelPrimary='Contact our Sales Team'
						btnTarget='#'
						btnType='secondary'
						imgSrc='img/welcome02.png'
						imgAlt='Hell, yeah'
					/>
				</Section>

				{/* BENEFITS */}
				<Section
					type='triple'
					heading='Automate your design to code workflow!'
					byline='Using advanced token technology, changes are automatically applied to already coded components on any platform instantly.'
					bground
				>
					<Benefits
						heading='Save time and money'
						paragraph='Slash your development time and costs with a platform that lets you write once and deploy anywhere.'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='48'
							viewBox='0 96 960 960'
							width='48'
						>
							<path d='M480 995.999q-117 0-219.654-68.885T103.462 760.92v141.231H58.078V682.153h219.999v45.383H136.846q45.615 91.232 142.038 157.156Q375.307 950.615 480 950.615q75.692 0 142.884-28.269t117.731-77.461q50.538-49.192 80.923-116 30.384-66.807 32.692-142.884h45.384q-1.923 85.23-35.654 159.845T773.499 876.23q-56.731 55.769-132.307 87.769-75.577 32-161.192 32Zm-23.23-142.615v-52.077q-42.308-10.846-72.231-34.846-29.923-24-50.538-66.922l39.845-14.308q14.308 37.231 44.616 58.462 30.307 21.23 68.153 21.23 39.616 0 68.808-19.884 29.193-19.885 29.193-56.885 0-34.154-23.654-55.885-23.654-21.731-90.269-48.962-62.693-25-91.731-52.461-29.038-27.461-29.038-74.153 0-40.923 28.846-71.154 28.846-30.231 80-37.231v-49.077h43.845v49.077q34.923 3.231 62.154 21.692 27.23 18.462 44.23 50.385L571.385 438Q556 412.307 534 398.692q-22-13.615-52-13.615-40.154 0-64.385 19.923t-24.231 51.693q0 32.769 22.923 51.384 22.923 18.616 84.769 43 69.77 28.231 98.193 58.308 28.423 30.076 28.423 78.769 0 26.153-9.962 46.769-9.961 20.615-26.846 35.038-16.885 14.423-40.115 22.962-23.231 8.538-50.154 10.384v50.077H456.77ZM60.386 565.999q2.693-87.153 36.808-161.961 34.115-74.807 91.23-130.191 57.116-55.384 132.115-86.615 75-31.231 159.461-31.231 115.846 0 219.654 69.078 103.808 69.077 156.884 167.539V249.849h45.384v219.998H681.923v-45.383h141.231q-44.461-89.309-140.576-156.194Q586.462 201.385 480 201.385q-74.154 0-141.346 27.884-67.192 27.885-117.923 76.692-50.73 48.808-81.692 115.615-30.961 66.808-33.269 144.423H60.386Z' />
						</svg>
					</Benefits>
					<Benefits
						heading='Share the same language'
						paragraph="A flexible, future-proof foundation that's built on open standards and evolves with today's complex ecosystem."
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='48'
							viewBox='0 96 960 960'
							width='48'
						>
							<path d='M235.765 1006q-43.88 0-74.822-30.898-30.942-30.896-30.942-74.776 0-43.88 30.839-74.641 30.838-30.761 74.894-30.761 13.035 0 24.052 2.692 11.016 2.692 22.137 8.077l100.001-124.078q-18.23-21.462-26.884-48.077T351.001 578l-144.463-48.308q-13.846 24.23-37.302 38.038-23.456 13.808-53.848 13.808-43.567 0-74.477-30.795Q10 519.948 10 475.955q0-43.993 30.897-74.743 30.896-30.75 74.776-30.75 43.88 0 74.641 30.782 30.761 30.782 30.761 74.756 0 1.923-.192 4.308t-.192 3.538l145.078 50.078q15.308-27.769 38.115-43.807 22.808-16.039 52.269-22.269V314.23q-38.615-9.076-60.153-39.153Q374.462 245 374.462 211.38q0-43.495 30.795-74.437t74.788-30.942q43.993 0 74.743 30.91 30.75 30.91 30.75 74.628 0 33.461-21.846 63.538-21.846 30.077-59.846 39.153v153.618q29.461 6.23 52.576 22.269 23.115 16.038 38.808 43.807l144.078-50.078q-.384-1.057-.384-3.538V476q0-43.974 30.715-74.756 30.716-30.782 74.596-30.782t74.822 30.795q30.942 30.795 30.942 74.788 0 43.993-30.91 74.743-30.91 30.75-74.477 30.75-30.268 0-54.094-14-23.825-14-37.056-37.846L608.999 578q5 28.923-3.539 55.73-8.538 26.808-27.384 47.5l100.001 124.463q10.615-5.385 21.884-8.077 11.27-2.692 23.868-2.692 44.993 0 75.582 30.715 30.588 30.716 30.588 74.596t-30.897 74.822Q768.206 1006 724.326 1006q-43.88 0-74.641-30.815-30.761-30.814-30.761-74.833 0-19.196 5.323-34.607 5.324-15.412 16.831-30.36L541.076 710.537q-27.895 15.846-61.483 15.846-33.588 0-61.285-15.846l-99.386 125.848q11.154 14.615 16.654 29.693 5.5 15.078 5.5 34.274 0 44.019-30.715 74.833Q279.645 1006 235.765 1006ZM115.641 536.154q25.205 0 42.629-17.525 17.423-17.526 17.423-42.732 0-25.205-17.526-42.628-17.526-17.423-42.731-17.423-25.205 0-42.629 17.525-17.423 17.526-17.423 42.732 0 25.205 17.526 42.628 17.526 17.423 42.731 17.423Zm120 424.462q25.205 0 42.629-17.526 17.423-17.526 17.423-42.731 0-25.205-17.526-42.629-17.526-17.423-42.731-17.423-25.205 0-42.629 17.526-17.423 17.526-17.423 42.731 0 25.205 17.526 42.629 17.526 17.423 42.731 17.423Zm244.462-688.923q25.205 0 42.628-17.526 17.423-17.526 17.423-42.731 0-25.205-17.525-42.629-17.526-17.423-42.732-17.423-25.205 0-42.628 17.526-17.423 17.526-17.423 42.731 0 25.205 17.525 42.629 17.526 17.423 42.732 17.423ZM480.308 681q35.384 0 60.038-24.962Q565 631.077 565 595.692q0-35.384-24.766-60.038Q515.469 511 480 511q-35.077 0-60.038 24.766Q395 560.531 395 596q0 35.077 24.962 60.038Q444.923 681 480.308 681Zm244.256 279.616q25.205 0 42.629-17.526 17.423-17.526 17.423-42.731 0-25.205-17.526-42.629-17.526-17.423-42.731-17.423-25.205 0-42.629 17.526-17.423 17.526-17.423 42.731 0 25.205 17.526 42.629 17.526 17.423 42.731 17.423Zm120-424.462q25.205 0 42.629-17.525 17.423-17.526 17.423-42.732 0-25.205-17.526-42.628-17.526-17.423-42.731-17.423-25.205 0-42.629 17.525-17.423 17.526-17.423 42.732 0 25.205 17.526 42.628 17.526 17.423 42.731 17.423ZM480 211.539ZM115.539 476ZM480 596Zm364.461-120ZM235.539 900.461Zm488.922 0Z' />
						</svg>
					</Benefits>
					<Benefits
						heading='Reduce time to market'
						paragraph='Ship faster and more often! With our CI/CD products that make building and shipping mobile apps a breeze.'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='48'
							viewBox='0 96 960 960'
							width='48'
						>
							<path d='M600.061 875.999q-125.599 0-212.829-87.17-87.231-87.169-87.231-212.768t87.17-212.829q87.169-87.231 212.768-87.231t212.829 87.17q87.231 87.169 87.231 212.768t-87.17 212.829q-87.169 87.231-212.768 87.231Zm-309.907-12.385q-103.384-15.539-166.768-98.692Q60.002 681.769 60.002 576q0-105.769 63.384-188.922 63.384-83.153 166.768-98.692v44.343q-83.769 18.118-134.269 87.118-50.5 68.999-50.5 156.153t50.5 156.153q50.5 69 134.269 87.118v44.343ZM600 576Zm0 254.615q105.077 0 179.846-74.769T854.615 576q0-105.077-74.769-179.846T600 321.385q-105.077 0-179.846 74.769T345.385 576q0 105.077 74.769 179.846T600 830.615Z' />
						</svg>
					</Benefits>
				</Section>

				{/* SHOWCASE */}
				<Section>
					<Showcase
						kicker='Showcase'
						heading='Work with the people who have the experience, knowledge and expertise your project needs.'
					/>
				</Section>

				{/* BLOG */}
				<Section type='triple' heading='News & Highlights'>
					<Card
						imgSrc='img/tsr05.png'
						// category='Design'
						catTarget='#'
						heading='The Hidden Mystery Behind Our Design Tokens'
						paragraph='Our culture is dominated by efforts to score points and win arguments. But do we really talk anymore?'
						linkTarget='/article'
					/>
					<Card
						imgSrc='img/tsr03.png'
						// category='Culture'
						catTarget='#'
						heading='Winning Tactics For Successful TOKEN DESIGN'
						paragraph='Our culture is dominated by efforts to score points and win arguments. But do we really talk anymore?'
						linkTarget='/article'
					/>
					<Card
						imgSrc='img/tsr04.png'
						// category='Tech & Dev'
						catTarget='#'
						heading='Little Known Ways To Rid Yourself Of the Grid'
						paragraph='Our culture is dominated by efforts to score points and win arguments. But do we really talk anymore?'
						linkTarget='/article'
					/>
					{/* <Card
						imgSrc='img/tsr05.png'
						// category='Design'
						catTarget='#'
						heading='The Hidden Mystery Behind Design Tokens'
						paragraph='Our culture is dominated by efforts to score points and win arguments. But do we really talk anymore?'
						linkTarget='/article'
					/>
					<Card
						imgSrc='img/tsr01.png'
						// category='Blog'
						catTarget='#'
						heading='Headline, Ladies'
						paragraph='Our culture is dominated by efforts to score points and win arguments. But do we really talk anymore?'
						linkTarget='/article'
					/> */}
				</Section>
			</main>

			<Footer />

			<style jsx>{`
				footer {
					width: 100%;
					height: 100px;
					border-top: 1px solid #eaeaea;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			`}</style>
		</>
	);
}
