const express = require('express');
const bodyParser = require('body-parser');
const { parse } = require('url');
const next = require('next');
const mobxReact = require('mobx-react');
const mongoose = require('mongoose');
const { Delivery } = require('./schema');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Set up MobX for SSR.
mobxReact.useStaticRendering(true);

// Set up the database.
mongoose.connect('mongodb://localhost/delivery');
mongoose.Promise = global.Promise;

app.prepare().then(() => {
  const server = express();

  // Body parser
  server.use(bodyParser.json());

  server.post('/api/delivery', (req, res) => {
    postDelivery(req.body, (err, id) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(201).send(JSON.stringify({ id }));
      }
    });
  });

  server.get('/api/delivery/:id', (req, res) => {
    getDelivery(req.params.id, delivery => {
      if (delivery) {
        res.setHeader('Content-Type', 'application/json');
        return res.send(JSON.stringify(delivery));
      } else {
        return res.sendStatus(404);
      }
    });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});

function postDelivery(data, callback) {
  const id = Math.round(Date.now() + Math.random());
  data.id = id;

  const delivery = new Delivery(data);
  delivery.save(err => {
    if (err) callback(err, null);
    else callback(null, id);
  });
}

function getDelivery(id, callback) {
  Delivery.findOne({ id }, (err, delivery) => callback(delivery));
}
