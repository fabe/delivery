import React from 'react';

const Footer = ({ item }) => (
  <div>
    <p>Delivery is built by <a href="https://fabianschultz.com">Fabian Schultz</a>.</p>
    <style jsx>{`
      div {
        margin-top: 4em;
        padding: 2em;
        border-top: 2px solid #eee;
        text-align: center;
        font-size: 0.9em;
      }

      a {
        color: inherit;
      }
    `}</style>
  </div>
);

export default Footer;
