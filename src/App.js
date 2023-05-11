import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Component/Home/Home";

import './App.css'
import Team from "./Component/Team/Team";




function App() {
  
  
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/"   element={<Home/>}></Route>
        <Route path="/team"  element={<Team/>}></Route>
      </Routes>

    </BrowserRouter>


  </>
}

export default App;
