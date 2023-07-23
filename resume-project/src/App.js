import { BrowserRouter, Routes, Route } from "react-router-dom";
import appContext from './Contexts/AppContext';
import HomeScreen from "./Pages/home.js";

function App() {
  return (<>

    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomeScreen/>}></Route>
      </Routes>
    </BrowserRouter>

  </>    
  )
}

export default App;
