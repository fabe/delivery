import React from 'react';
import { inject, observer } from 'mobx-react';
import DeliveryItem from './DeliveryItem';

@inject('store')
@observer
class Delivery extends React.Component {
  componentDidMount() {
    // this.props.store.delivery.fetchDelivery(this.props.id);
  }

  render() {
    const { delivery } = this.props.store.delivery;
    return (
      <div>
        <h1>{delivery.title}</h1>
        <p>{delivery.subtitle}</p>
        {delivery.items.map((item, i) => <DeliveryItem key={i} item={item} />)}
      </div>
    );
  }
}

export default Delivery;
