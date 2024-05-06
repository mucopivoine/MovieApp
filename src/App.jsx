import React from 'react'
import Header from './Components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Explore from './Pages/Explore'
import Genre from './Pages/Genre'
import News from './Pages/News'
import Movies from './Pages/Movies'
import TVShows from './Pages/TVShows'
import Home from './Pages/Home'
import Layouts from './Layout/Layouts'

function App() {
  return (
    <div className='bg-black'>
    <Router>
      <Header/>
      <Routes>
              {/* <Route path="/" element={<Layouts/>}> */}
              <Route path="/" element={<Home/>} />
              <Route path="/explore" element={<Explore/>}/>
              <Route path="/genre" element={<Genre/>} />
              <Route path="/news" element={<News />} />
              <Route path="/movies" element={<Movies/>} />
              <Route path="/tvShows" element={<TVShows />} />
              {/* </Route> */}
            </Routes>
    </Router>
    
        </div>
  )
}

export default App