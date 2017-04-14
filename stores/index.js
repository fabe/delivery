import Delivery from './Delivery';

let store = null;

class Store {
  constructor(isServer, delivery) {
    this.delivery = new Delivery(delivery);
  }
}

export function initStore(isServer, delivery) {
  if (isServer && typeof window === 'undefined') {
    return new Store(isServer, delivery);
  } else {
    if (store === null) {
      store = new Store(isServer, delivery);
    }
    return store;
  }
}
