import React from 'react';

const DeliveryItem = ({ item }) => (
  <div>
    <h2>{item.title}</h2>
    <p>{item.subtitle}</p>
    <img src={item.image} alt={item.title} />
  </div>
);

export default DeliveryItem;
