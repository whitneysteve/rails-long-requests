import './index.css';

import App from './app/App';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Hide grey selection boxes on mobile
document.addEventListener("touchstart", function(){}, true);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
