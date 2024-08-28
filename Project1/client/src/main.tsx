import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Chat from './components/Chat.tsx';
import About from './components/About.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
       <Route path='/' element={<Chat/>}/>
      <Route path='/about' element={<About/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
