import React from 'react';

const Footer = ({ item }) => (
  <div className="container">
    Built by <a href="https://fabianschultz.com">Fabian Schultz</a> on 🐣 2017.
    <style jsx>{`
      div {
        margin-top: 4em;
        padding: 2em;
        border-top: 2px solid #eee;
        text-align: center;
        font-size: 0.8em;
      }
    `}</style>
  </div>
);

export default Footer;
