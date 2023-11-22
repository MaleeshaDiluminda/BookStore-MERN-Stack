import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateBooks from './pages/CreateBooks'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import Home from './pages/Home'
import ShowBook from './pages/ShowBook'

const App = () => {
  return (
    <Routes>
      <Route path='./pages/CreateBooks' element={<CreateBooks />}/>
      <Route path='./pages/DeleteBook' element={<DeleteBook />}/>
      <Route path='./pages/EditBook' element={<EditBook/>}/>
      <Route path='./pages/Home' element={<Home/>}/>
      <Route path='./pages/ShowBook' element={<ShowBook/>}/>
    </Routes>
  )
}

export default App
