import React from 'react';
import { Provider } from 'mobx-react';
import { initStore } from '../stores';
import Page from '../components/Page';
import Landing from '../components/Landing';
import { observer } from 'mobx-react';
import Head from 'next/head';

export default class Home extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req;
    const store = initStore(isServer);
    return { isServer };
  }

  constructor(props) {
    super(props);
    this.store = initStore(props.isServer);
  }

  render() {
    return (
      <Provider store={this.store}>
        <Page title="Index Page">
          <Head>
            <title>Delivery — Deliver your design work, clutter-free.</title>
          </Head>
          <Landing />
        </Page>
      </Provider>
    );
  }
}
