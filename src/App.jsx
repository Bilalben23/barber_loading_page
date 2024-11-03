import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import BookAppointment from './pages/BookAppointment'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='book-appointment' element={<BookAppointment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
