import {Home} from '@containers/index'
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
      </Routes>
      </>
    </Router>
  )
}

export default App
