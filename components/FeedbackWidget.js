import React from 'react';

const FeedbackWidget = () => (
  <script
    id="pp-cfp"
    data-env="prod"
    data-token="cfb3a6fb0ed97800e1ecbf2ec50f606b86f47ba0a987622606fb98562c2a9052"
    dangerouslySetInnerHTML={{
      __html: `(function(d){var s=d.createElement('script'),c=d.createElement('link');s.src='https://app.prodpad.com/static/js/prodpad-cfp.gz.js';s.async=1;c.href='https://app.prodpad.com/static/css/prodpad-cfp.gz.css';c.rel='stylesheet';document.head.appendChild(c);document.head.appendChild(s);})(document);`,
    }}
  />
);

export default FeedbackWidget;
