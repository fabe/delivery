import React from 'react';
import ImageZoom from 'react-medium-image-zoom';

class DeliveryItem extends React.Component {
  constructor() {
    super();
    this.state = { loaded: false };
    this.zoom = {};
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  componentDidMount() {
    const { image } = this.zoom.refs;

    if (image.complete) this.handleImageLoaded();
    image.addEventListener('load', this.handleImageLoaded);
  }

  handleImageLoaded() {
    this.setState({ loaded: true });
  }

  render() {
    const { item } = this.props;

    return (
      <div>
        <h2 className="item-title">{item.title}</h2>
        <p>{item.subtitle}</p>
        <span className={`image ${this.state.loaded ? 'loaded' : null}`}>
          <a href={item.image} target="_blank" />
          <ImageZoom
            ref={el => this.zoom = el}
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
            transition: .2s background-color ease;
          }

          .image > :global(img) {
            display: block;
            position: relative;
            margin: 0 auto;
            box-shadow: 0 0 0 1px rgba(0, 0, 0, .05);
            opacity: 0;
            transition: .2s opacity ease;
          }

          .loaded {
            background-color: transparent;
          }

          .loaded > :global(img) {
            opacity: 1;
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
            transition: .2s opacity ease;
            z-index: 40;
          }

          .image a:hover {
            border-color: transparent;
          }
        `}</style>
      </div>
    );
  }
}

export default DeliveryItem;
