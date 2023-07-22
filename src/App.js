import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import './App.css'
import FCFS from "./Pages/FCFS";
import SJFNonPreemptive from "./Pages/SJFNonPreemptive";
import PriorityNonPreemptive from "./Pages/PriorityNonPreemptive";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/OS-cbp-vnr" element={<Home />} />
        <Route path="/OS-cbp-vnr/sjf/non-preemptive" element={<SJFNonPreemptive/>} />
        <Route path="/OS-cbp-vnr/fcfs" element={<FCFS/>} />
        <Route path="/OS-cbp-vnr/priority/non-preemptive" element={<PriorityNonPreemptive/>} />
      </Routes>
    </div>
  );
}

export default App;
