const mongoose = require('mongoose');

const DeliveryItemSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  image: String,
});

const DeliverySchema = new mongoose.Schema({
  id: Number,
  title: String,
  subtitle: String,
  config: {
    background: String,
  },
  items: [DeliveryItemSchema],
});

const Delivery = mongoose.model('Delivery', DeliverySchema);

module.exports = {
  Delivery,
};
