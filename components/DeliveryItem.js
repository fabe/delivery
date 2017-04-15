import React from 'react';
import ImageZoom from 'react-medium-image-zoom';

const DeliveryItem = ({ item }) => (
  <div>
    <h2 className="item-title">{item.title}</h2>
    <p>{item.subtitle}</p>
    <ImageZoom
      image={{
        src: item.image,
        alt: item.title,
      }}
      zoomImage={{
        src: item.image,
        alt: item.title,
      }}
    />
    <style jsx>{`
      div {
        margin-bottom: 4rem;
      }
    `}</style>
  </div>
);

export default DeliveryItem;
