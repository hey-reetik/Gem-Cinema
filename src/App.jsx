import {Home,Watch, Movies, About} from '@containers/index'
import './App.css';
import {Navbar } from '@components/index'
import { Route,Routes, BrowserRouter as Router } from 'react-router-dom';





function App() {

  return (
    <Router>
      <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<Watch/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </>
    </Router>
  )
}

export default App
