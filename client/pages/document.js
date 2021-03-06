import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						href='https://fonts.googleapis.com/css2?family=Quicksand+sans-serif&display=swap'
						rel='stylesheet'
					/>

					<link
						href='https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap'
						rel='stylesheet'
					/>
				</Head>

				<body className='sans'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
