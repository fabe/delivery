import Document, { Head, Main, NextScript } from 'next/document';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeedbackWidget from '../components/FeedbackWidget';

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Delivery</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" type="image/png" href="/static/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/static/favicon-16x16.png" sizes="16x16" />

          <link rel="image_src" type="image/png" href="http://use.delivery/static/facebook.jpg" />

          <meta property="og:image:url" content="http://use.delivery/static/facebook.jpg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:url" content="http://use.delivery" />
          <meta property="og:image:height" content="1052" />
          <meta property="og:image:height" content="550" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@fschultz_" />
          <meta name="twitter:image" content="http://use.delivery/static/twitter.jpg" />
          <meta
            name="twitter:summary_large_image"
            content="http://use.delivery/static/facebook.jpg"
          />

          <FeedbackWidget />
          <script
            dangerouslySetInnerHTML={{
              __html: `console.log('%c 🤓 Yo! Wanna help out? Email me: desk@fabianschultz.com.', 'color: #0775F3; font-size: 1.2em');`,
            }}
          />
        </Head>
        <body>
          <Header />
          <Main />
          <Footer />
          <NextScript />
          <style jsx global>{`
            * {
              box-sizing: border-box;
              -webkit-tap-highlight-color: rgba(0,0,0,0);
            }

            body,
            html {
              margin: 0;
              padding: 0;
              height: 100%;
              background-color: #fff;
            }

            body {
              font-family: system, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', roboto, 'Lucida Grande';
              color: #232323;
              padding: 3rem 2rem 0;
              font-size: 1rem;
              line-height: 1.5;
              min-height: 100%;
              margin: 0 auto;
              -webkit-font-smoothing: antialiased;
            }

            h1 {
              margin-bottom: 1.5rem;
            }

            h2 {
              margin-bottom: 0.3rem;
            }

            h3 {
              margin-bottom: 2rem;
            }

            h1,
            .title {
              font-size: 2.5rem;
              font-weight: 500;
              line-height: 1.2;
            }

            h2,
            .item-title {
              font-size: 1.5rem;
              font-weight: 500;
            }
            
            h3,
            .masthead {
              font-size: 1.2rem;
              font-weight: 500;
              color: #888;
            }

            @media screen and (max-width: 480px) {
              h1,
              .title {
                font-size: 2rem;
              }

              h1 {
                margin-bottom: 1rem;
              }

              h3 {
                margin-bottom: 0;
              }

              h3,
              .masthead {
                font-size: 1rem;
              }
            }

            p,
            .subtitle {
              margin-top: 0;
              margin-bottom: 2rem;
              color: #888;
              font-size: 1rem;
            }

            a {
              color: #0775F3;
              border-bottom: 1px solid transparent;
              text-decoration: none;
              transition: .2s ease all;
            }

            a:hover {
              border-color: #0775F3;
            }

            strong {
              font-weight: 500;
            }

            button {
              all: unset;
              position: relative;
              background-color: #0775F3;
              color: #fff;
              -webkit-text-fill-color: #fff;
              padding: 1rem;
              border-radius: 3px;
              font-weight: 500;
              cursor: pointer;
              transition: .2s ease all;
              text-align: center;
            }

            @media screen and (max-width: 480px) {
              button { line-height: 1.1; }
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

            button.loading:before,
            .image:before {
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

            .image:before {
              background-image: url('/static/loading-black.svg');
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

            @media screen and (max-width: 480px) {
              .divider {
                margin: 2rem auto;
              }
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
              box-shadow: none;
              -webkit-appearance: none;
              font-family: inherit;
            }

            textarea { line-height: 1.5; }

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

            .rdsu-progress {
              color: #888;
            }

            #pp-cfp-root {
              z-index: 998 !important;
            }

            #pp-cfp-trigger {
              background-color: #f3f3f3 !important;
              color: #999 !important;
              border-radius: 3px !important;
              -webkit-text-fill-color: #999;
              border: none !important;
            }

            #pp-cfp-trigger:hover {
              background-color: #eaeaea !important;
            }

            #pp-cfp-trigger:active {
              box-shadow: none !important;
            } 

            ::-webkit-input-placeholder {
              opacity: 0.5;
              color: inherit;
            }

            ::-moz-placeholder {
              opacity: 0.5;
              color: inherit;
            }

            :-ms-input-placeholder {
              opacity: 0.5;
              color: inherit;
            }

            :-moz-placeholder {
              opacity: 0.5;
              color: inherit;
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
