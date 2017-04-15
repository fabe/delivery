import React from 'react';
import Link from 'next/link';

const Header = props => (
  <header>
    <Link href="/"><a>🚚</a></Link>
    <style jsx>{`
      header {
        position: fixed;
        left: 0; right: 0;
        top: 0;
        width: 100%; height: 3rem;
        line-height: 3rem;
        padding: 0 2rem;
        background-color: #0474F3;
        text-align: left;
        color: #fff;
      }

      header a {
        color: #fff;
        text-decoration: none;
      }
    `}</style>
  </header>
);

export default Header;
