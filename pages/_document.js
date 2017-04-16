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
              height: 100%;
            }

            html {
              background-color: #222;
              overflow: hidden;
            }

            body {
              font-family: system, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Lucida Grande';
              color: #232325;
              padding: 3rem 2rem 0;
              font-size: 1rem;
              line-height: 1.5;
              max-width: 1800px;
              min-height: 100%;
              margin: 0 auto;
              background-color: #fff;
              -webkit-font-smoothing: antialiased;
              overflow: scroll;
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

            strong {
              font-weight: 500;
            }

            button {
              all: unset;
              position: relative;
              background-color: #0474F3;
              color: #fff;
              -webkit-text-fill-color: #fff;
              padding: 1rem;
              border-radius: 3px;
              font-weight: 500;
              cursor: pointer;
              transition: .2s ease all;
            }

            button:hover {
              background-color: #0067E6;
            }

            button:active {
              transform: scale(0.95);
            }

            button:disabled {
              opacity: .5;
              cursor: not-allowed;
            }

            button.secondary {
              background-color: #f2f2f2;
              color: #999;
              -webkit-text-fill-color: #999;
            }

            button.secondary:hover {
              background-color: #eaeaea;
            }

            button.loading {
              color: rgba(0, 0, 0, 0);
              -webkit-text-fill-color: rgba(0, 0, 0, 0);
            }

            button.loading:before {
              width: 25px; height: 25px;
              top: 50%; left: 50%;
              transform: translate(-50%, -50%);
              display: block;
              position: absolute;
              background-image: url('/static/loading-white.svg');
              animation-duration: .6s;
              animation-name: spin;
              animation-iteration-count: infinite;
              animation-timing-function: ease-out;
              transform-origin: 0% 0%;
              content: ' ';
            }

            img {
              max-width: 100%;
            }

            .container {
              max-width: 600px;
              margin: 2rem auto;
            }

            .divider {
              width: 15%; height: 2px;
              margin: 4rem auto;
              background-color: #eee;
            }

            .dashedInput {
              display: inline-block;
              width: 100%;
              min-height: 10px;
              margin-bottom: 0.5rem;
              padding: 1rem;
              border: 2px dashed #eee;
              border-radius: 3px;
              text-align: center;
              resize: none;
              transition: .2s all ease;
            }

            .dashedInput .dashedInput {
              margin-bottom: 0;
              border-bottom: 0;
            }

            .dashedInput:focus {
              outline: none;
              border-color: #aaa;
            }

            .dashedInput.error {
              border-color: #ff3a30;
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

            @keyframes spin {
              0% {
                transform: rotate(0deg) translate(-50%, -50%);
              }
              100% {
                transform: rotate(360deg) translate(-50%, -50%);
              }
            }
          `}</style>
        </body>
      </html>
    );
  }
}
