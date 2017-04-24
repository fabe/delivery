import React from 'react';

class DeliveryItem extends React.Component {
  constructor() {
    super();
    this.state = { loaded: false, zoom: false };
    this.image = {};
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.handleToggleZoom = this.handleToggleZoom.bind(this);
  }

  componentDidMount() {
    const { image } = this;

    if (image.complete) this.handleImageLoaded();
    image.addEventListener('load', this.handleImageLoaded);
  }

  handleImageLoaded() {
    this.setState({ loaded: true });
  }

  handleToggleZoom() {
    this.setState({ zoom: !this.state.zoom });

    // Don't fuck with SSR.
    if (document) {
      const body = document.querySelector('body');
      body.className === 'no-scroll' ? (body.className = '') : (body.className = 'no-scroll');
    }
  }

  render() {
    const { item } = this.props;

    return (
      <div>
        <h2 className="item-title">{item.title}</h2>
        <p>{item.subtitle}</p>
        <span
          className={`image ${this.state.loaded ? 'loaded' : ''} ${this.state.zoom ? 'zoom' : ''}`}
        >
          <a href={item.image} target="_blank" />
          <img
            ref={el => this.image = el}
            src={item.image}
            alt={item.title}
            onClick={this.handleToggleZoom}
          />
        </span>
        <style jsx>{`
          div {
            margin-bottom: 6rem;
            overflow: auto;
          }

          h2 {
            margin-top: 0;
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
            opacity: 0;
            transition: .2s opacity ease;
          }

          .loaded {
            min-height: 0;
            background-color: transparent;
          }

          .loaded:before {
            display: none;
          }

          .loaded > :global(img) {
            opacity: 1;
          }

          .image {
            cursor: zoom-in;
          }

          .image.zoom {
            position: fixed;
            width: 100%; height: 100%;
            top: 0; left: 0;
            padding: 2rem;
            overflow: auto;
            background-color: #fff;
            z-index: 1000;
            cursor: zoom-out;
          }

          :global(body.no-scroll) {
            overflow: hidden;
          }

          .image img {
            width: auto;
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
