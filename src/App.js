import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import './App.css'
import FCFS from "./Pages/FCFS";
import SJF from "./Pages/SJF";
import Priority from "./Pages/Priority";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/OS-cbp-vnr" element={<Home />} />
        <Route path="/OS-cbp-vnr/sjf" element={<SJF/>} />
        <Route path="/OS-cbp-vnr/fcfs" element={<FCFS/>} />
        <Route path="/OS-cbp-vnr/priority" element={<Priority/>} />
      </Routes>
    </div>
  );
}

export default App;
