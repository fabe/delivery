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
        <hgroup>
          <h1>{delivery.title}</h1>
          <p>{delivery.subtitle}</p>
        </hgroup>
        {delivery.items.map((item, i) => <DeliveryItem key={i} item={item} />)}
        <style jsx>{`
          div {
            max-width: 900px;
            margin: 0 auto;
            text-align: center;
          }

          hgroup {
            margin-top: 4rem;
            margin-bottom: 4rem;
          }

          hgroup p {
            margin-bottom: 0;
          }

          hgroup:after {
            display: inline-block;
            width: 15%; height: 4px;
            margin: 4rem auto 0;
            background-color: #eee;
            content: '';
          }
        `}</style>
      </div>
    );
  }
}

export default Delivery;
