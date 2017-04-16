import React from 'react';
import { inject, observer } from 'mobx-react';
import DeliveryItem from './DeliveryItem';
import Error from '../pages/_error';

@inject('store')
@observer
class Delivery extends React.Component {
  componentDidMount() {
    if (!this.props.store.delivery.delivery) {
      this.props.store.delivery.fetchDelivery(this.props.id);
    }
  }

  renderDelivery(delivery) {
    return (
      <div className="container">
        <hgroup>
          <h1>{delivery.title}</h1>
          <p>{delivery.subtitle}</p>
        </hgroup>
        <div className="divider" />
        {delivery.items.map((item, i) => <DeliveryItem key={i} item={item} />)}
        <style jsx>{`
          div {
            text-align: center;
          }

          hgroup {
            margin-top: 4rem;
            margin-bottom: 4rem;
          }

          hgroup p {
            margin-bottom: 0;
          }
        `}</style>
      </div>
    );
  }

  render() {
    const { delivery } = this.props.store.delivery;
    if (typeof delivery === 'number') return <Error statusCode={delivery} />;
    return delivery ? this.renderDelivery(delivery) : <div />;
  }
}

export default Delivery;
