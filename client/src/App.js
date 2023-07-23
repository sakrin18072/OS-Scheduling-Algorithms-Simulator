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
        <Route path="/" element={<Home />} />
        <Route path="/sjf/non-preemptive" element={<SJFNonPreemptive/>} />
        <Route path="/sjf/preemptive" element={<SJFPreemptive/>} />
        <Route path="/sjf" element={<SJF/>} />
        <Route path="/fcfs" element={<FCFS/>} />
        <Route path="/priority/non-preemptive" element={<PriorityNonPreemptive/>} />
        <Route path="/priority/preemptive" element={<PriorityPreemptive/>} />
        <Route path="/priority" element={<Priority/>} />
      </Routes>
    </div>
  );
}

export default App;
