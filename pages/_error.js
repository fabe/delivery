import React from 'react';
import Head from 'next/head';

export default class Error extends React.Component {
  static getInitialProps({ res, jsonPageRes }) {
    const statusCode = res ? res.statusCode : jsonPageRes ? jsonPageRes.status : null;
    return { statusCode };
  }

  renderErrorMessage(code) {
    switch (code) {
      case 404:
        return <p>The page you requested wasn't found!</p>;
        break;
      default:
        return <p>There was an error processing your request. Try reloading!</p>;
        break;
    }
  }

  render() {
    const { statusCode } = this.props;

    return (
      <div className="container">
        <Head>
          <title>Delivery — {statusCode}</title>
        </Head>

        {statusCode ? <h1>{statusCode}</h1> : <h1>Oh no!</h1>}
        {this.renderErrorMessage(statusCode)}

        <style jsx>{`
          div {
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}
