import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Delivery extends React.Component {
  componentDidMount() {
    // this.props.store.delivery.fetchDelivery(this.props.id);
  }

  render() {
    const { delivery } = this.props.store.delivery;
    return <div>{delivery.title}</div>;
  }
}

export default Delivery;
