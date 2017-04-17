import React from 'react';
import { inject, observer } from 'mobx-react';
import DeliveryItem from './DeliveryItem';
import Success from './Success';
import Error from '../pages/_error';
import Head from 'next/head';

@inject('store')
@observer
class Delivery extends React.Component {
  componentDidMount() {
    if (!this.props.store.delivery.delivery) {
      this.props.store.delivery.fetchDelivery(this.props.id);
    }
  }

  renderDelivery(delivery) {
    const { deliveryCreated } = this.props.store.delivery;

    return (
      <div className="container">
        <Head>
          <title>
            Delivery — {delivery.title}
          </title>
          <meta name="description" content={delivery.subtitle} />
          <meta name="author" content={delivery.masthead} />
          <meta property="og:title" content={`Delivery — ${delivery.title}`} />
          <meta property="og:description" content={delivery.subtitle} />
          <meta name="twitter:title" content={`Delivery — ${delivery.title}`} />
          <meta name="twitter:description" content={delivery.subtitle} />
        </Head>
        {deliveryCreated ? <Success id={delivery.id} /> : null}
        <hgroup>
          <h3>{delivery.masthead}</h3>
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

          @media screen and (max-width: 480px) {
            hgroup {
              margin-top: 2rem;
              margin-bottom: 2rem;
            }
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
