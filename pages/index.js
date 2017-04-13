import React from 'react';
import { Provider } from 'mobx-react';
import { initStore } from '../store';
import Page from '../components/Page';

export default class Counter extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req;
    const store = initStore(isServer);
    return { lastUpdate: store.lastUpdate, isServer };
  }

  constructor(props) {
    super(props);
    this.store = initStore(props.isServer, props.lastUpdate);
  }

  componentDidMount() {
    const testDelivery = {
      hash: '1',
      title: 'A new big thing!',
      subtitle: 'For someone special.',
      config: {
        background: '#ffffff',
      },
      items: [
        {
          title: 'A screenshot',
          subtitle: 'Very nice stuff!',
          image: {
            largeUrl: '/path/to/image.png',
            tinyUrl: '/path/to/image_tiny.png',
          },
        },
      ],
    };
    this.store.postDelivery(testDelivery);
  }

  render() {
    return (
      <Provider store={this.store}>
        <Page title="Index Page" linkTo="/other" />
      </Provider>
    );
  }
}
