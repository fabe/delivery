import React from 'react';
import Link from 'next/link';

const Header = props => (
  <header>
    <Link href="/"><a className="logo">🚚</a></Link>
    <span>Built by <a href="https://fabianschultz.com">Fabian Schultz</a> on 🐣 2017.</span>
    <style jsx>{`
      header {
        position: fixed;
        left: 0; right: 0;
        top: 0;
        max-width: 1800px;
        margin: 0 auto;
        width: 100%; height: 3rem;
        display: flex;
        justify-content: space-between;
        line-height: 3rem;
        padding: 0 2rem;
        background-color: #f2f2f2;
        text-align: left;
      }

      span {
        font-size: 0.7rem;
        font-weight: 500;
      }

      .logo {
        user-select: none;
      }

      .logo:hover {
        border-color: transparent;
      }
    `}</style>
  </header>
);

export default Header;
