import React from 'react';
import { Provider } from 'mobx-react';
import { initStore } from '../stores';
import Page from '../components/Page';
import Delivery from '../components/Delivery';
import { observer } from 'mobx-react';
import axios from 'axios';

export default class DeliveryPage extends React.Component {
  static async getInitialProps({ req, query }) {
    const delivery = await axios
      .get(`http://localhost:3000/api/delivery/${query.id}`)
      .then(res => res.data)
      .catch(err => {
        return false;
      });
    const isServer = !!req;
    const store = initStore(isServer, delivery);
    return { isServer, delivery };
  }

  constructor(props) {
    super(props);
    this.store = initStore(props.isServer, props.delivery);
  }

  render() {
    return (
      <Provider store={this.store}>
        <Page>
          <Delivery id={this.props.url.query.id} />
        </Page>
      </Provider>
    );
  }
}
