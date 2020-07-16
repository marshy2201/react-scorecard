import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './components/context';

import App from './components/App';
import './index.css';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
