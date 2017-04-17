import React from 'react';

const Success = ({ id }) => (
  <div>
    <strong>Success!</strong> Share with:
    <br />
    <input
      type="text"
      value={`https://use.delivery/share?id=${id}`}
      onClick={e => e.target.select()}
      readOnly
    />

    <style jsx>{`
      div {
        position: fixed;
        width: 23rem;
        max-width: calc(100% - 4rem);
        top: calc(5rem + 2px); right: 2rem;
        background-color: #fff;
        border: 2px solid #eee;
        padding: 1rem;
        border-radius: 3px;
        animation-duration: 1s;
        animation-name: fadein;
      }

      input {
        width: 100%;
        margin-top: 0.2rem;
        text-align: center;
        color: #0775F3;
        font: inherit;
        padding: 0;
        border: none;
        cursor: text;
      }

      @keyframes fadein {
        0% {
          opacity: 0;
          transform: translateY(-20px);
        }
        50% {
          opacity: 0;
          transform: translateY(-20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0px);
        }
      }
    `}</style>
  </div>
);

export default Success;
