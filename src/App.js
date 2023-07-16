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
        <Route path="/" element={<Home />} />
        <Route path="/sjf" element={<SJF/>} />
        <Route path="/fcfs" element={<FCFS/>} />
        <Route path="/priority" element={<Priority/>} />
      </Routes>
    </div>
  );
}

export default App;
