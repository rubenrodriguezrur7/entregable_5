import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { UserNameProvider } from './context/UserNameContext';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserNameProvider>
      <RouterProvider router={router} />
    </UserNameProvider>
  </React.StrictMode>,
);
