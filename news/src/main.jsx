import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AuthContextProbider from './ContextApi/AuthContextProbider';
import './index.css';
import router from './routes/Routes.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthContextProbider>
  <RouterProvider router={router}></RouterProvider>
</AuthContextProbider>
      

 
  </React.StrictMode>,
)
