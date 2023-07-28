import React, { useState } from "react";
import Layout from "../Components/Layout";
import axios from "axios";

const SJFNonPreemptive = () => {
  const [processes, setProcesses] = useState([]);
  const [result, setResult] = useState([]);
  const [starvationDetected, setStarvationDetected] = useState(false);
  const [newProcess, setNewProcess] = useState({
    id: "",
    burstTime: "",
    priority: "",
    arrivalTime: "",
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
      initialBurstTime: parseInt(burstTime),
    };
    const newProcesses = [...processes, process];
    setProcesses(newProcesses);
    try {
      const { data } = await axios.post("/sjf/non-preemptive", {
        processesFromReq: newProcesses,
      });
      if (data?.success) {

        setResult(data.completedProcesses);
        setAverageTurnaroundTime(data.averageTurnaroundTime);
        setAverageWaitingTime(data.averageWaitingTime);
        for (let i of data.completedProcesses) {
          if (i.waitingTime >= 500) {
            setStarvationDetected(true);
            break;
          }
        }
      }
    } catch (error) {
      console.log(error.message);
    }
    setNewProcess({ id: "", burstTime: "", priority: "", arrivalTime: "" });
    
  };

  return (
    <Layout>
      <div className="container mx-auto mt-8">
        <div className="bg-gray-600 text-neutral-300 p-8 rounded-lg shadow-lg max-w-full">
          <h2 className="text-2xl font-bold mb-4">
            Shortest Job First (SJF) Non-preemptive Algorithm
          </h2>
          <p className="mb-4">
            The Shortest Job First (SJF) non-preemptive algorithm is a
            scheduling algorithm used by operating systems to prioritize the
            execution of processes based on their burst time. It ensures that
            the process with the shortest burst time is selected first and
            allowed to run to completion before other processes are considered.
            This algorithm can minimize the average waiting time and provide
            efficient utilization of resources.
          </p>
          <h3 className="text-lg font-bold mb-2">
            Advantages of SJF Non-preemptive Algorithm:
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Minimizes the average waiting time for processes.</li>
            <li>
              Provides optimal efficiency when the burst times are known in
              advance.
            </li>
            <li>Reduces the turnaround time, maximizing the throughput.</li>
            <li>Simple to implement and understand.</li>
          </ul>
          <h3 className="text-lg font-bold mb-2">
            Disadvantages of SJF Non-preemptive Algorithm:
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Requires knowledge of the burst times in advance, which may not
              always be available.
            </li>
            <li>
              May lead to starvation of processes with longer burst times.
            </li>
            <li>
              Does not handle well in dynamic environments where burst times
              change frequently.
            </li>
            <li>
              Not suitable for interactive or real-time systems where response
              time is crucial.
            </li>
          </ul>
        </div>

        <p className="text-2xl text-center mt-8 font-extrabold mb-3 text-neutral-300">
          Shortest Job First (SJF) Non-preemptive Algorithm Simulation
        </p>
        <div className="container">
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

            <button
              type="submit"
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              Add Process
            </button>
          </form>
          {starvationDetected && (
            <>
              <p className="text-red-500 text-lg font-semibold">Starvation detected!</p>
              <img
                src="https://media.tenor.com/TCMtwXLJukAAAAAC/brahmi-krishna.gif"
                className=" rounded-2xl mb-8 w-64"
                alt=""
              />
            </>
          )}

          {result.length > 0 && (
            <div className="mb-8 text-neutral-300">
              <h2 className="text-lg font-semibold mb-2">Processes:</h2>
              <table className="table-auto w-full border-0 bg-gray-600">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Process ID</th>
                    <th className="px-4 py-2">Burst Time</th>
                    <th className="px-4 py-2">Arrival Time</th>
                    <th className="px-4 py-2">Waiting Time</th>
                    <th className="px-4 py-2">Completion Time</th>
                  </tr>
                </thead>
                <tbody>
                  {result.map((process, index) => (
                    <tr key={index} className="odd:bg-gray-800 text-center">
                      <td className=" px-4 py-2">{process.id}</td>
                      <td className=" px-4 py-2">{process.initialBurstTime}</td>
                      <td className=" px-4 py-2">{process.arrivalTime}</td>
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

export default SJFNonPreemptive;
