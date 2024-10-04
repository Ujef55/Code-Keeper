import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import SingleKeeperNote from './components/SingleKeeperNote';
import Navbar from './components/Navbar';
import AllKeeperNotes from './components/AllKeeperNotes';

const routes = createBrowserRouter([
  {
    path: '/',
    element:
      <div>
        <Navbar />
        <Home />
      </div>
  },
  {
    path: '/keeper',
    element:
      <div>
        <Navbar />
        <AllKeeperNotes />
      </div>
  },
  {
    path: '/keeper/:id',
    element:
      <div>
        <Navbar />
        <SingleKeeperNote />
      </div>
  },
])


const App = () => {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App;