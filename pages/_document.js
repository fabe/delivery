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
            * {
              box-sizing: border-box;
            }

            body,
            html {
              margin: 0;
              padding: 0;
            }

            body {
              font-family: system, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Lucida Grande';
              color: #232325;
              padding: 3rem 2rem 0;
              font-size: 1rem;
              line-height: 1.5;
              -webkit-font-smoothing: antialiased;
            }

            h1,
            h2,
            h3 {
              margin-bottom: 0.8rem;
            }

            h1,
            .title {
              font-size: 2rem;
              font-weight: 500;
            }

            h2,
            .item-title {
              font-size: 1.5rem;
              font-weight: 500;
            }

            p,
            .subtitle {
              margin-top: 0;
              margin-bottom: 2rem;
              color: #888;
              font-size: 1rem;
            }

            a {
              color: #0474F3;
              border-bottom: 1px solid transparent;
              text-decoration: none;
              transition: .2s ease all;
            }

            a:hover {
              border-color: #0474F3;
            }

            button {
              all: unset;
              background-color: #0474F3;
              color: #fff;
              padding: 1rem;
              border-radius: 3px;
              font-weight: 500;
              cursor: pointer;
            }

            img {
              max-width: 100%;
            }

            button.secondary {
              background-color: #f6f6f6;
              color: #999;
            }

            .container {
              max-width: 700px;
              margin: 2rem auto;
            }

            .divider {
              width: 15%; height: 4px;
              margin: 4rem auto;
              background-color: #eee;
            }

            .dashedInput {
              display: inline-block;
              width: 100%;
              min-height: 10px;
              margin-bottom: 1rem;
              padding: 1rem;
              border: 2px dashed #eee;
              text-align: center;
              resize: none;
            }

            .dashedInput:focus {
              outline: none;
              border-color: #aaa;
            }

            ::-webkit-input-placeholder {
              color: #aaa;
            }

            ::-moz-placeholder {
              color: #aaa;
            }

            :-ms-input-placeholder {
              color: #aaa;
            }

            :-moz-placeholder {
              color: #aaa;
            }
          `}</style>
        </body>
      </html>
    );
  }
}
