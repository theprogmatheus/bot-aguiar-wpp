import React from 'react';
import ReactDOM from 'react-dom/client';

// Default Style
import './style.scss';

// Router Confi
import RouterConfig from './config/RouterConfig';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterConfig />);