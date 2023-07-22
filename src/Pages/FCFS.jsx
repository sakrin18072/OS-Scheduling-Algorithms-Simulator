import React, { useState } from "react";
import Layout from "../Components/Layout";

const FCFS = () => {
  const [processes, setProcesses] = useState([]);
  const [newProcess, setNewProcess] = useState({
    id: "",
    burstTime: "",
  });

  const handleInputChange = (e) => {
    setNewProcess({
      ...newProcess,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProcess.burstTime === "" || !newProcess.id) {
      window.alert("Please enter valid data");
    } else setProcesses([...processes, newProcess]);
    setNewProcess({
      id: "",
      burstTime: "",
    });
  };

  const calculateConvoyEffect = () => {
    if (processes.length === 0) {
      return false;
    }

    for (let i = 0; i < processes.length - 1; i++) {
      if (processes[i].burstTime - processes[i + 1].burstTime >= 500)
        return true;
    }
    return false;
  };

  const calculateWaitingTime = () => {
    let waitingTime = 0;
    const waitingTimes = [];

    for (let i = 0; i < processes.length; i++) {
      waitingTimes[i] = waitingTime;
      waitingTime += parseInt(processes[i].burstTime);
    }

    return waitingTimes;
  };

  const calculateAverageTurnaroundTime = () => {
    const waitingTimes = calculateWaitingTime();
    let totalTurnaroundTime = 0;

    for (let i = 0; i < processes.length; i++) {
      totalTurnaroundTime += waitingTimes[i] + parseInt(processes[i].burstTime);
    }

    return totalTurnaroundTime / processes.length;
  };

  const calculateAverageWaitingTime = () => {
    const waitingTimes = calculateWaitingTime();
    let totalWaitingTime = 0;

    for (let i = 0; i < processes.length; i++) {
      totalWaitingTime += waitingTimes[i];
    }

    return totalWaitingTime / processes.length;
  };

  const convoyEffectDetected = calculateConvoyEffect();
  const waitingTimes = calculateWaitingTime();
  const averageTurnaroundTime = calculateAverageTurnaroundTime();
  const averageWaitingTime = calculateAverageWaitingTime();

  return (
    <Layout>
      <div className="container mx-auto mt-8">
        <div className="bg-gray-600 text-neutral-300 p-8 rounded-lg shadow-lg mt-8">
          <h2 className="text-2xl font-bold mb-4">
            First-Come, First-Served (FCFS) Scheduling Algorithm
          </h2>
          <p className="mb-4">
            The First-Come, First-Served (FCFS) scheduling algorithm is a simple
            scheduling algorithm used by operating systems to prioritize the
            execution of processes based on their arrival time. In this
            algorithm, the process that arrives first is executed first, and
            subsequent processes are executed in the order of their arrival. It
            follows a non-preemptive approach, allowing a process to run until
            completion before the next process begins.
          </p>
          <h3 className="text-lg font-bold mb-2">
            Advantages of FCFS Scheduling Algorithm:
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Easy to understand and implement.</li>
            <li>
              Provides fairness by executing processes in the order of their
              arrival.
            </li>
            <li>Simple to visualize and predict the scheduling order.</li>
            <li>Guarantees that each process will eventually execute.</li>
          </ul>
          <h3 className="text-lg font-bold mb-2">
            Disadvantages of FCFS Scheduling Algorithm:
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              May lead to a high average waiting time, especially if
              long-duration processes arrive first.
            </li>
            <li>
              Does not consider the execution time or burst time of processes,
              which can result in inefficient resource utilization.
            </li>
            <li>
              Can cause delays for short processes if long processes arrive
              early.
            </li>
            <li>
              Not suitable for time-critical or real-time systems where response
              time is crucial.
            </li>
          </ul>
        </div>
        <h1 className="text-2xl text-center mt-8 font-extrabold text-neutral-300">
          First-Come, First-Served (FCFS) Scheduling Algorithm Simulation
        </h1>
        <div className="min-h-screen">
          <form onSubmit={handleSubmit} className="mb-8">
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
            <button
              type="submit"
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              Add Process
            </button>
          </form>
          {convoyEffectDetected && (
            <>
              <p className="text-red-500 font-semibold">
                Convoy Effect detected!
              </p>
              <img
                src="https://media.tenor.com/QP3dbDN-YQUAAAAC/brahmi-brahmanandam.gif"
                className="rounded-2xl mb-8"
                alt=""
              />
            </>
          )}
          {processes.length > 0 && (
            <div className="mb-8 text-neutral-300">
              <h2 className="text-lg font-semibold mb-2">Processes:</h2>
              <table className="table-auto w-full border-0 bg-gray-600">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Process ID</th>
                    <th className="px-4 py-2">Burst Time</th>
                    <th className="px-4 py-2">Waiting Time</th>
                  </tr>
                </thead>
                <tbody>
                  {processes.map((process, index) => (
                    <tr key={index} className="odd:bg-gray-800 text-center">
                      <td className=" px-4 py-2">{process.id}</td>
                      <td className=" px-4 py-2">{process.burstTime}</td>
                      <td className=" px-4 py-2">{waitingTimes[index]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {processes.length > 0 && (
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">
                  Average Turnaround Time: {averageTurnaroundTime}
                </p>
                <p className="font-semibold">
                  Average Waiting Time: {averageWaitingTime}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default FCFS;
