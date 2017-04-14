import React from 'react';

const DeliveryItem = ({ item }) => (
  <div>
    <h2>{item.title}</h2>
    <p>{item.subtitle}</p>
    <img src={item.image} alt={item.title} />
    <style jsx>{`
      div {
        margin-bottom: 4em;
      }

      img {
        max-width: 100%;
      }
    `}</style>
  </div>
);

export default DeliveryItem;
