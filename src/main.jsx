import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './components/MainLayout.jsx'
import App from './pages/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counting from './pages/Counting.jsx'
import Listing from './pages/Listing.jsx'
import Cards from './pages/Cards.jsx'
import API from './pages/API.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<App/>}></Route>
          <Route path="count" element={<Counting/>}></Route>
          <Route path="list" element={<Listing/>}></Route>
          <Route path="cards" element={<Cards/>}></Route>
          <Route path="api" element={<API />}></Route>
        </Route> 
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
