import React from 'react';
import Link from 'next/link';

const Landing = ({ item }) => (
  <div className="container">
    <h1>🚚</h1>
    <h2>
      Deliver your design work,<br />clutter-free.
    </h2>

    <Link prefetch href="/share?id=Hk0ric1Ax">
      <button className="secondary">See an example</button>
    </Link>
    <Link prefetch href="/new"><button>Create a delivery</button></Link>

    <p>
      use.delivery is an homage to
      {' '}
      <a href="http://layervault.tumblr.com/post/70319555287/delivery-20">Layervault's Delivery</a>
      , which was shut down in 2015.
    </p>
    <style jsx>{`
      div {
        margin-top: 6rem;
        text-align: center;
      }

      h1 {
        margin-top: 0;
        margin-bottom: 2.5rem;
        font-size: 2.5rem;
        line-height: 1;
        user-select: none;
        cursor: default;
        animation-duration: 1.5s;
        animation-name: truck;
      }

      h2 {
        margin-bottom: 2.5rem;
        font-size: 2.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      h2,
      button,
      p {
        animation-duration: 3s;
        animation-name: fadein;
      }

      :global(header) {
        animation-duration: 3s;
        animation-name: fadein;
      }

      p {
        margin-top: 6rem;
        padding: 1rem 0;
        opacity: 0.5;
        font-size: 0.7rem;
        font-weight: 500;
        transition: .2s all ease;
        animation-name: fadein-p;
      }

      p:hover {
        opacity: 1;
      }

      button {
        margin-right: 1rem;
      }

      @keyframes truck {
        0% {
          text-indent: 150px;
          opacity: 0;
        }
        50% {
          text-indent: 150px;
          opacity: 0;
        }
        100% {
          text-indent: 0;
          opacity: 1;
        }
      }

      @keyframes fadein {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      @keyframes fadein-p {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 0.5;
        }
      }
    `}</style>
  </div>
);

export default Landing;
