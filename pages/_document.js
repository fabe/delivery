import Document, { Head, Main, NextScript } from 'next/document';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Delivery</title>
        </Head>
        <body>
          <Header />
          <Main />
          <Footer />
          <NextScript />
          <style jsx global>{`
            body,
            html {
              margin: 0;
              padding: 0;
            }
            
            body {
              font-family: system, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Lucida Grande';
              color: #232325;
              padding: 3rem 2rem 0;
              -webkit-font-smoothing: antialiased;
            }

            h1,
            h2,
            h3 {
              margin-bottom: 0.8rem;
              font-weight: 500;
            }

            p {
              margin-top: 0;
              margin-bottom: 2em;
              color: #9898a1;
            }
          `}</style>
        </body>
      </html>
    );
  }
}
