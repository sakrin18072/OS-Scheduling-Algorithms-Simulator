import React, { useState } from "react";
import Layout from "../Components/Layout";
import axios from "axios";

const PriorityPreemptive = () => {
  const [processes, setProcesses] = useState([]);
  const [result, setResult] = useState([]);
  const [newProcess, setNewProcess] = useState({
    id: "",
    burstTime: "",
    priority: "",
    arrivalTime:""
  });
  const [averageWaitingTime, setAverageWaitingTime] = useState(0);
  const [averageTurnaroundTime, setAverageTurnaroundTime] = useState(0);

  const handleInputChange = (e) => {
    setNewProcess({ ...newProcess, [e.target.name]: e.target.value });
  };

  const addProcess = async (e) => {
    e.preventDefault();

    const { id, burstTime, priority, arrivalTime } = newProcess;

    const process = {
      id,
      burstTime: parseInt(burstTime),
      priority: parseInt(priority),
      arrivalTime: parseInt(arrivalTime),
    };
    const newProcesses = [...processes, process];
    setProcesses(newProcesses);
    try {
      const { data } = await axios.post("/priority/preemptive", {
        processesFromReq: newProcesses,
      });
      if (data?.success) {
        setResult(data.completedProcesses);
        setAverageTurnaroundTime(data.averageTurnaroundTime);
        setAverageWaitingTime(data.averageWaitingTime);
      }
    } catch (error) {
      console.log(error.message);
    }
    setNewProcess({ id: "", burstTime: "", priority: "", arrivalTime: "" });
  };

  return (
    <Layout>
      <div className="container mx-auto mt-8">
        <div className="bg-gray-600 text-neutral-300 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            Preemptive Priority Scheduling Algorithm
          </h2>
          <p className="mb-4">
            The Preemptive Priority Scheduling algorithm is a scheduling
            algorithm used by operating systems to prioritize the execution of
            processes based on their priority. Each process is assigned a
            priority value, and the process with the highest priority is given
            CPU time for execution. However, unlike non-preemptive priority
            scheduling, this algorithm can interrupt the running process if a
            higher-priority process arrives.
          </p>
          <h3 className="text-lg font-bold mb-2">
            Advantages of Preemptive Priority Scheduling Algorithm:
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Ensures timely execution of high-priority processes and
              responsiveness to critical tasks.
            </li>
            <li>
              Allows for the dynamic allocation of CPU time to higher-priority
              processes even if lower-priority processes are currently running.
            </li>
            <li>
              Facilitates the scheduling of real-time tasks and time-critical
              processes.
            </li>
            <li>
              Provides fairness by allowing higher-priority processes to get
              more execution time.
            </li>
          </ul>
          <h3 className="text-lg font-bold mb-2">
            Disadvantages of Preemptive Priority Scheduling Algorithm:
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              May lead to higher overhead due to frequent context switching when
              higher-priority processes continuously arrive.
            </li>
            <li>
              Can result in priority inversion, where a lower-priority process
              holds a resource needed by a higher-priority process.
            </li>
            <li>
              Requires an efficient priority management mechanism to handle
              dynamic changes in process priorities.
            </li>
            <li>
              The process with the highest priority can monopolize the CPU,
              leading to lower system throughput for lower-priority processes.
            </li>
          </ul>
        </div>

        <p className="text-2xl text-center mt-8 font-extrabold mb-3 text-neutral-300">
          Preemptive Priority Scheduling Algorithm Simulation
        </p>
        <div className="">
          <form onSubmit={addProcess} className="mb-8">
            <div className="mb-4">
              <label htmlFor="id" className="block text-neutral-300">
                Process ID
              </label>
              <input
                type="text"
                id="id"
                name="id"
                value={newProcess.id}
                onChange={handleInputChange}
                className="border border-gray-300 bg-transparent text-neutral-300 rounded px-3 py-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="burstTime" className="block text-neutral-300">
                Burst Time
              </label>
              <input
                type="number"
                id="burstTime"
                name="burstTime"
                value={newProcess.burstTime}
                onChange={handleInputChange}
                className="border border-gray-300 bg-transparent text-neutral-300 rounded px-3 py-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="arrivalTime" className="block text-neutral-300">
                Arrival Time
              </label>
              <input
                type="number"
                id="arrivalTime"
                name="arrivalTime"
                value={newProcess.arrivalTime}
                onChange={handleInputChange}
                className="border border-gray-300 bg-transparent text-neutral-300 rounded px-3 py-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="priority" className="block text-neutral-300">
                Priority
              </label>
              <input
                type="number"
                id="priority"
                name="priority"
                value={newProcess.priority}
                onChange={handleInputChange}
                className="border border-gray-300 bg-transparent text-neutral-300 rounded px-3 py-2 w-full"
              />
            </div>

            <button
              type="submit"
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              Add Process
            </button>
          </form>

          {result.length > 0 && (
            <div className="mb-8 text-neutral-300">
              <h2 className="text-lg font-semibold mb-2">Processes:</h2>
              <table className="table-auto w-full border-0 bg-gray-600">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Process ID</th>
                    <th className="px-4 py-2">Burst Time</th>
                    <th className="px-4 py-2">Arrival Time</th>
                    <th className="px-4 py-2">Priority</th>
                    <th className="px-4 py-2">Waiting Time</th>
                    <th className="px-4 py-2">Completion Time</th>
                  </tr>
                </thead>
                <tbody>
                  {result.map((process, index) => (
                    <tr key={index} className="odd:bg-gray-800 text-center">
                      <td className=" px-4 py-2">{process.id}</td>
                      <td className=" px-4 py-2">{process.burstTime}</td>
                      <td className=" px-4 py-2">{process.arrivalTime}</td>
                      <td className=" px-4 py-2">{process.priority}</td>
                      <td className=" px-4 py-2">{process.waitingTime}</td>
                      <td className=" px-4 py-2">{process.completionTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4">
                <p className="font-semibold">
                  Average Waiting Time: {averageWaitingTime}
                </p>
                <p className="font-semibold">
                  Average Turnaround Time: {averageTurnaroundTime}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PriorityPreemptive;
