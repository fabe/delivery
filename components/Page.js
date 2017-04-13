import React from 'react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Page extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Page;
