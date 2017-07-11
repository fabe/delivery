const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { parse } = require('url');
const next = require('next');
const mobxReact = require('mobx-react');
const mongoose = require('mongoose');
const { Delivery } = require('./schema');
const shortid = require('shortid');
const { mLabUrl, mLabUser, mLabPassword } = require('./config');
const s3Router = require('react-dropzone-s3-uploader/s3router');
const enforce = require('express-sslify');

const dev = process.env.NODE_ENV !== 'production';
const port = dev ? 3000 : process.env.PORT || 8080;
const app = next({ dev });
const handle = app.getRequestHandler();

// Set up MobX for SSR.
mobxReact.useStaticRendering(true);

// Set up the database.
mongoose.connect(`mongodb://${mLabUser}:${mLabPassword}@${mLabUrl}`);
mongoose.Promise = global.Promise;

app.prepare().then(() => {
  const server = express();

  // Body parser
  server.use(bodyParser.json());
  server.use(cors());
  console.log(dev);
  //if (!dev) server.use(enforce.HTTPS({ trustProtoHeader: true }));

  server.post('/api/delivery', (req, res) => {
    postDelivery(req.body, (err, id) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(201).send(JSON.stringify({ id }));
      }
    });
  });

  server.get('/api/delivery/:id', (req, res) => {
    getDelivery(req.params.id, delivery => {
      if (delivery) {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        return res.send(JSON.stringify(delivery));
      } else {
        return res.sendStatus(404);
      }
    });
  });

  server.use(
    '/s3',
    s3Router({
      bucket: 'deliverysh',
      region: 'us-west-2',
      headers: { 'Access-Control-Allow-Origin': '*' },
      ACL: 'private',
    })
  );

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, '0.0.0.0', err => {
    console.log(err);
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

function postDelivery(data, callback) {
  const id = shortid.generate();
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
