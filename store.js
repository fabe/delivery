import { action, observable } from 'mobx';
import axios from 'axios';
import { autobind } from 'core-decorators';
import { apiUrl } from './config';

let store = null;

class Store {
  constructor(isServer, lastUpdate) {}

  @autobind
  @action
  postDelivery(delivery) {
    axios
      .post(`${apiUrl}/delivery`, delivery)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export function initStore(isServer, lastUpdate = Date.now()) {
  if (isServer && typeof window === 'undefined') {
    return new Store(isServer, lastUpdate);
  } else {
    if (store === null) {
      store = new Store(isServer, lastUpdate);
    }
    return store;
  }
}
