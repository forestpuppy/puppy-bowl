/* eslint-disable no-unused-vars */
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Players from './components/Players'
import SinglePlayer from './components/SinglePlayer'
import Nav from './components/Navigation'


function App() {
  return (
  <div className='App'>
    <h1>THE PUPPY BOWL!</h1>
    <Nav/>
    <Routes>
      <Route path="/"element={<Players />}/>
      <Route path="/:id"element={<SinglePlayer/>}/>
    </Routes>
  </div>
  );
}
        
export default App
