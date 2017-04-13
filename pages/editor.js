import React from 'react';
import { Provider } from 'mobx-react';
import { initStore } from '../stores';
import Page from '../components/Page';
import Editor from '../components/Editor';
import { observer } from 'mobx-react';

export default class EditorPage extends React.Component {
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
        <Page>
          <Editor delivery={this.store.delivery} />
        </Page>
      </Provider>
    );
  }
}
