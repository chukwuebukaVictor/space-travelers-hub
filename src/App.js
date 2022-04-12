import {Route, Routes } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Rockets/>}></Route>
      <Route path='mission' element={<Mission />}></Route>
    </Routes>
  );
}

export default App;
