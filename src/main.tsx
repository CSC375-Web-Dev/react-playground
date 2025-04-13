import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './components/MainLayout.tsx'
import App from './pages/Home.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counting from './pages/Counting.tsx'
import Listing from './pages/Listing.tsx'
import Cards from './pages/Cards.tsx'
import API from './pages/API.tsx'

createRoot(document.getElementById('root')!).render(
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
