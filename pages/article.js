import Head from "next/head";
import Header from "../components/header/header";
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
				<article className='article container'>
					<div className='article__header full-width'>
						<div className='article__hero'>
							<div className='article__hero-content container'>
								<div className='article__hero-headline'>
									<h1>Nulla vitae elit libero, a pharetra augue</h1>
									<div className='article__hero-byline'>
										<a rel='author' href='/author/john-doe'>
											John Doe
										</a>
										<time
											pubdate
											datetime='2023-08-18'
											title='August 18th, 2023'
										>
											18/8/23
										</time>
									</div>
								</div>
							</div>
							<div className='article__hero-media'>
								<img src='img/article01.jpg' alt='img/article01.jpg' />
							</div>
						</div>
					</div>
					<div className='article__intro'>
						<p className='lede'>
							Nulla vitae elit libero, a pharetra augue. Cras justo odio,
							dapibus ac facilisis in, egestas eget quam. Maecenas faucibus
							mollis interdum. Donec sed odio dui.
						</p>
					</div>
					<div className='article__richtext'>
						<p>
							Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
							natoque penatibus et magnis dis parturient montes, nascetur
							ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor
							mauris condimentum nibh, ut fermentum massa justo sit amet risus.
							Aenean lacinia bibendum nulla sed consectetur.
						</p>
						<h2>Donec id elit non mi porta gravida at eget metus</h2>
						<p>
							Aenean eu leo quam.{" "}
							<a href='http://example.com'>Pellentesque ornare sem</a> lacinia
							quam venenatis vestibulum. Morbi leo risus, porta ac consectetur
							ac, vestibulum at eros. Integer posuere erat a ante venenatis
							dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra
							augue. Maecenas sed diam eget risus varius blandit sit amet non
							magna.
						</p>
						<p>
							Maecenas sed diam eget risus varius blandit sit amet non magna.
							Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit
							libero, a pharetra augue. Donec sed odio dui. Aenean lacinia
							bibendum nulla sed consectetur. Curabitur blandit tempus
							porttitor.
						</p>
						<blockquote>
							<q>
								Cras justo odio, dapibus ac facilisis in, egestas eget quam.{" "}
								<strong>Sed posuere</strong> consectetur est at lobortis.
								Integer posuere erat a ante venenatis dapibus posuere velit
								aliquet.
							</q>
						</blockquote>
						<h3>Sed posuere consectetur est at lobortis</h3>
						<p>
							Fusce dapibus, <em>tellus ac cursus commodo</em>, tortor mauris
							condimentum nibh, ut fermentum massa justo sit amet risus. Morbi
							leo risus, porta ac consectetur ac, vestibulum at eros. Etiam
							porta sem malesuada magna mollis euismod. Nulla vitae elit libero,
							a pharetra augue.
						</p>
						<h2>Ut fermentum massa justo sit amet risus</h2>
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
							<li>Aliquam tincidunt mauris eu risus</li>
							<li>Vestibulum auctor dapibus neque</li>
						</ul>
						<p>
							Pellentesque habitant morbi tristique senectus et netus et
							malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
							vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
							amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
							placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
							pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae,
							ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
							condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac
							dui. Donec non enim in turpis pulvinar facilisis. Ut felis.
							Praesent dapibus, neque id cursus faucibus, tortor neque egestas
							augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam
							dui mi, tincidunt quis, accumsan porttitor, facilisis luctus,
							metus
						</p>
					</div>
				</article>
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
