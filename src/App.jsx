import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import Books from './pages/Books'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Landing/>}/>
        <Route path='/home' element={ <Home/>}/>
        <Route path='/book' element={ <Books/>}/>

      </Routes>
     
    </>
  )
}

export default App
