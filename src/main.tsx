import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Game from "./Game.tsx"
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
    element={
      <div>
        <Outlet />
      </div>
    }
  >
    <Route path="/" element={<App />} />
    <Route path="/game" element={<Game />} />
  </Route>
    
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
