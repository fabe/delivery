import { action, observable, extendObservable } from 'mobx';
import axios from 'axios';
import Router from 'next/router';
import { autobind } from 'core-decorators';
import { apiUrl } from '../config';

export default class Delivery {
  @observable delivery = {};
  @observable editor = {};

  constructor(delivery) {
    this.delivery = delivery;
    this.editor = {
      title: '',
      subtitle: '',
      items: [],
    };
  }

  @autobind
  @action
  onFormChange(name, value, itemId) {
    if (itemId || itemId === 0) {
      // Find the index of the item that needs to be updated.
      const i = this.editor.items.findIndex(item => item.id === itemId);

      // Create a new item with the updated value.
      const newItem = { ...this.editor.items[i], [name]: value };

      // Create new items.
      const items = [...this.editor.items.slice(0, i), newItem, ...this.editor.items.slice(i + 1)];

      // Update new items.
      this.editor = { ...this.editor, items };
    } else {
      this.editor = { ...this.editor, [name]: value };
    }
  }

  @autobind
  @action
  addNewItem() {
    const newItemId = this.editor.items.length;
    const items = [...this.editor.items, { id: newItemId, title: '', subtitle: '', image: '' }];
    this.editor = { ...this.editor, items };
  }

  @autobind
  @action
  removeItem(itemId) {
    const i = this.editor.items.findIndex(item => item.id === itemId);
    const items = [...this.editor.items.slice(0, i), ...this.editor.items.slice(i + 1)];
    this.editor = { ...this.editor, items };
  }

  @autobind
  @action
  postDelivery(editor = this.editor) {
    axios
      .post(`${apiUrl}/delivery`, editor)
      .then(res => {
        Router.push(`/delivery?id=${res.data.id}`);
      })
      .catch(err => {
        console.log(err);
      });
  }

  @autobind
  @action
  fetchDelivery(id) {
    axios
      .get(`${apiUrl}/delivery/${id}`)
      .then(res => {
        this.delivery = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
