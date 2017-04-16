import { action, observable, extendObservable } from 'mobx';
import axios from 'axios';
import Router from 'next/router';
import { autobind } from 'core-decorators';
import { apiUrl } from '../config';

export default class Delivery {
  @observable delivery = {};
  @observable editor = {};
  @observable isCreatingDelivery = false;
  @observable isUploading = 0;
  @observable error = '';
  @observable showErrorModal = false;

  constructor(delivery) {
    this.delivery = delivery;
    this.editor = {
      title: '',
      subtitle: '',
      items: [{ id: 0, title: '', subtitle: '', image: '' }],
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
      if (name === 'title' && value === '') {
        this.error = 'no-title';
      } else {
        this.error = '';
      }

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

  validateForm() {
    if (!this.editor.title) {
      this.error = 'no-title';
      this.showErrorModal = true;
    } else if (this.stripedEmptyItems().length === 0) {
      this.error = 'no-items';
      this.showErrorModal = true;
    } else {
      this.error = '';
      this.showErrorModal = false;
    }
  }

  stripedEmptyItems() {
    const actualItems = this.editor.items.filter(item => item.image !== '');
    return actualItems;
  }

  @autobind
  @action
  postDelivery(editor = this.editor) {
    this.validateForm();
    setTimeout(() => this.showErrorModal = false, 2500);

    if (this.error) {
      console.log('has errors');
    } else {
      this.isCreatingDelivery = true;
      this.editor.items = this.stripedEmptyItems();

      axios
        .post(`${apiUrl}/delivery`, editor)
        .then(res => {
          const url = `/delivery?id=${res.data.id}`;
          Router.push(url).then(() => this.isCreatingDelivery = false);
        })
        .catch(err => {
          console.log(err);
        });
    }
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
        this.delivery = err.response.status;
      });
  }

  @autobind
  @action
  setIsUploading(bool) {
    const isUploading = bool ? this.isUploading + 1 : this.isUploading - 1;
    this.isUploading = isUploading;
  }
}
