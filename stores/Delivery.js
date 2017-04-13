import { action, observable, extendObservable } from 'mobx';
import axios from 'axios';
import { autobind } from 'core-decorators';
import { apiUrl } from '../config';

export default class Delivery {
  @observable delivery = {
    title: 'Title',
    subtitle: 'Subtitle',
    items: [{ id: 0, title: 'Item Title', subtitle: 'Item Subtitle' }],
  };

  @autobind
  @action
  onFormChange(name, value, itemId) {
    if (itemId) {
      // Find the index of the item that needs to be updated.
      const i = this.delivery.items.findIndex(item => item.id === itemId);

      // Create a new item with the updated value.
      const newItem = { ...this.delivery.items[i], [name]: value };

      // Create new items.
      const items = [
        ...this.delivery.items.slice(0, i),
        newItem,
        ...this.delivery.items.slice(i + 1),
      ];

      // Update new items.
      this.delivery = { ...this.delivery, items };
    } else {
      this.delivery = { ...this.delivery, [name]: value };
    }
  }

  @autobind
  @action
  addNewItem() {
    const newItemId = this.delivery.items.length;
    const items = [...this.delivery.items, { id: newItemId, title: '', subtitle: '' }];
    this.delivery = { ...this.delivery, items };
  }

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
