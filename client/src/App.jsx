import React from 'react'
import{Route, Routes, useLocation} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Listings from './pages/Listings'
import CarDetails from './pages/CarDetails'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import MyBookings from './pages/MyBookings'
import Footer from './components/Footer'
import Slidebar from './components/owner/Slidebar'
import Dashboard from './pages/owner/Dashboard'
import AddCar from './pages/owner/AddCar'
import ListCar from './pages/owner/ListCar'

const App = () => {
  const location = useLocation()
  const isOwnerPath = location.pathname.includes('owner')

  return (
    <main>
      {!isOwnerPath && <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listings' element={<Listings />} />
        <Route path='/listing/:id' element={<CarDetails />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-bookings' element={<MyBookings />} />
        <Route path='/owner' element={<Slidebar />}>
          <Route index element={<Dashboard />} />
          <Route path='/owner/add-car' element={<AddCar />} />
          <Route path='/owner/list-car' element={<ListCar />} />
        </Route>
      </Routes>
      {!isOwnerPath && <Footer />}
    </main>
  )
}

export default App