import React from 'react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@inject('store')
@observer
class Page extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <DevTools />
      </div>
    );
  }
}

export default Page;
