import { action, observable, extendObservable } from 'mobx';
import axios from 'axios';
import { autobind } from 'core-decorators';
import { apiUrl } from '../config';

export default class Delivery {
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
