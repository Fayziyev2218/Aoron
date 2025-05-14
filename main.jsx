import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n'; // 👉 I18n faylini bu yerda import qilamiz

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
