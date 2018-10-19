import React from 'react';
import { render } from 'react-dom';

import './sass/main.scss';

if (module.hot) {
  module.hot.accept();
}

const MainApp = () => (
  <h1>Hello React!</h1>
);

// render the app
render(<MainApp />, document.getElementById('rootApp'));

