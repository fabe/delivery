import React from 'react';
import Link from 'next/link';

const Landing = ({ item }) => (
  <div className="container">
    <h1>🚚 delivery</h1>
    <p>
      With delivery you can share your design work in an uncomplicated manner.
      It is an homage to
      {' '}
      <a href="http://layervault.tumblr.com/post/70319555287/delivery-20">Layervault's Delivery</a>
      , which was ended in 2015.
    </p>
    <Link href="/editor"><button>Create a delivery</button></Link>
    <Link href="/delivery?id=Hk0ric1Ax">
      <button className="secondary">View an example</button>
    </Link>
    <style jsx>{`
      button {
        margin-right: 1rem;
      }

      p {
        font-size: 1.2rem;
      }
    `}</style>
  </div>
);

export default Landing;
