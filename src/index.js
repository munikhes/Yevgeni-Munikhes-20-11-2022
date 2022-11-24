import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
import reducer  from './redux/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';



const store = createStore(

    reducer,
    composeWithDevTools(
      // applyMiddleware(ReduxThunk)
    )
)

export default store;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
