import React from 'react';
import ImageZoom from 'react-medium-image-zoom';

const DeliveryItem = ({ item }) => (
  <div>
    <h2 className="item-title">{item.title}</h2>
    <p>{item.subtitle}</p>
    <span className="image">
      <a href={item.image} target="_blank" />
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
    </span>
    <style jsx>{`
      div {
        margin-bottom: 6rem;
      }

      .image {
        position: relative;
        display: block;
        background-color: #eee;
        min-height: 200px;
      }

      .image > :global(img) {
        display: block;
        position: relative;
      }

      .image:hover > a {
        opacity: 1;
      }

      .image a {
        display: block;
        width: 34px; height: 34px;
        position: absolute;
        top: 1rem; right: 1rem;
        background-image: url('/static/ico-direct.svg');
        opacity: 0;
        transition: .2s all ease;
      }

      .image a:hover {
        border-color: transparent;
      }
    `}</style>
  </div>
);

export default DeliveryItem;
