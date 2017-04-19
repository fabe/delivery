import React from 'react';
import Link from 'next/link';

const Header = props => (
  <header>
    <Link prefetch href="/"><a className="logo">delivery</a></Link>
    <span>
      Built by
      {' '}
      <a href="https://fabianschultz.com" target="_blank">Fabian Schultz</a> on 🐣 2017.
    </span>
    <style jsx>{`
      header {
        position: fixed;
        left: 0; right: 0;
        top: 0;
        margin: 0 auto;
        width: 100%; height: 3rem;
        display: flex;
        justify-content: space-between;
        line-height: 3rem;
        padding: 0 2rem;
        background-color: rgba(255, 255, 255, 0.97);
        box-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
        text-align: left;
        z-index: 69;
      }

      span {
        font-size: 0.7rem;
        font-weight: 500;
        color: #888;
      }

      span a {
        color: #888;
      }

      span a:hover {
        border-color: #ddd;
      }

      .logo {
        user-select: none;
        text-indent: -99999px;
        background-image: url('/static/logo.png');
        background-size: 40px;
        background-repeat: no-repeat;
        background-position: left center;
        width: 20px; height: 3rem;
        background-size: 20px;
        display: inline-block;
      }

      .logo:hover {
        border-color: transparent;
      }
    `}</style>
  </header>
);

export default Header;
