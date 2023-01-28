import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Pages/Home'
import Add from './components/Pages/Add'
import Navbar from './components/Navbar';

import './App.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
<Route path ="/" to element={<Home />} />
<Route path ="/Add" to element={<Add />} />

      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
