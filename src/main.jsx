// src/main.jsx

import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './app.css';
import './styles.css';
import './vars.css';

import { Homepage } from './pages/Homepage/Homepage';
import { Error } from './pages/Error/Error';
import { VolkswagenCase } from './pages/VolkswagenCase/VolkswagenCase';
import { AprrCase } from './pages/AprrCase/AprrCase';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      
      {
        path: 'volkswagencase',
        element: <VolkswagenCase />,
      },

      {
        path: 'aprrcase',
        element: <AprrCase />
      },

    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
