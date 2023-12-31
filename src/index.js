import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n'
import CartProvider from '../src/Context/CartProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <CartProvider>
        <App />
    </CartProvider>
  
);
