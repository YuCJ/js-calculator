import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Page from './components/page';
import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('root')
);
