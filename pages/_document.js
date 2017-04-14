import Document, { Head, Main, NextScript } from 'next/document';
import Link from 'next/link';

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Delivery</title>
        </Head>
        <body>
          <header>
            <Link href="/"><a>🚚</a></Link>
          </header>
          <Main />
          <NextScript />
          <style jsx global>{`
            body {
              font-family: system, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Lucida Grande';
              color: #232325;
              padding-top: 4em;
              -webkit-font-smoothing: antialiased;
            }

            header {
              position: fixed;
              left: 0; right: 0;
              top: 0;
              width: 100%;
              padding: 10px 20px;
              background-color: #0474F3;
              text-align: left;
              color: #fff;
            }

            header a {
              color: #fff;
              text-decoration: none;
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
