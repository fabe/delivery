import Delivery from './Delivery';

let store = null;

class Store {
  constructor(isServer) {
    this.delivery = new Delivery();
  }
}

export function initStore(isServer) {
  if (isServer && typeof window === 'undefined') {
    return new Store(isServer);
  } else {
    if (store === null) {
      store = new Store(isServer);
    }
    return store;
  }
}
