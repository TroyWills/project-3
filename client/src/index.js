import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from '';
import { StripeProvider, Elements } from 'react-stripe-elements'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StripeProvider apiKey={
    process.env.REACT_APP_PUBLISHABLE_TEST_APIKEY
  }>
    <Elements>
      <App />
    </Elements>
  </StripeProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorker.unregister();
