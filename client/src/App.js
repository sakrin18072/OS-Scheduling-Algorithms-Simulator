import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import './App.css'
import FCFS from "./Pages/FCFS";
import SJFNonPreemptive from "./Pages/SJFNonPreemptive";
import PriorityNonPreemptive from "./Pages/PriorityNonPreemptive";
import SJFPreemptive from "./Pages/SJFPreemptive";
import SJF from "./Pages/SJF";
import PriorityPreemptive from "./Pages/PriorityPreemptive";
import Priority from "./Pages/Priority";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/OS-cbp-vnr" element={<Home />} />
        <Route path="/OS-cbp-vnr/sjf/non-preemptive" element={<SJFNonPreemptive/>} />
        <Route path="/OS-cbp-vnr/sjf/preemptive" element={<SJFPreemptive/>} />
        <Route path="/OS-cbp-vnr/sjf" element={<SJF/>} />
        <Route path="/OS-cbp-vnr/fcfs" element={<FCFS/>} />
        <Route path="/OS-cbp-vnr/priority/non-preemptive" element={<PriorityNonPreemptive/>} />
        <Route path="/OS-cbp-vnr/priority/preemptive" element={<PriorityPreemptive/>} />
        <Route path="/OS-cbp-vnr/priority" element={<Priority/>} />
      </Routes>
    </div>
  );
}

export default App;
