import React, { useState } from "react";
import Layout from "../Components/Layout";

const Priority = () => {
  const [processes, setProcesses] = useState([]);
  const [newProcess, setNewProcess] = useState({
    id: "",
    burstTime: "",
    priority: "",
  });
  const [starvationDetected, setStarvationDetected] = useState(false);
  const [waitingTimes, setWaitingTimes] = useState([]);
  const [averageWaitingTime, setAverageWaitingTime] = useState(0);
  const [averageTurnaroundTime, setAverageTurnaroundTime] = useState(0);

  const handleInputChange = (e) => {
    setNewProcess({ ...newProcess, [e.target.name]: e.target.value });
  };

  const addProcess = (e) => {
    e.preventDefault();

    const { id, burstTime, priority } = newProcess;

    const process = {
      id,
      burstTime: parseInt(burstTime),
      priority: parseInt(priority),
    };
    const newProcesses = [...processes, process];
    newProcesses.sort((a, b) => {
      return a.priority - b.priority;
    });
    setProcesses(newProcesses);
    setNewProcess({ id: "", burstTime: "", priority: "" });

    if (newProcesses.length <= 1) return;

    let waitingTime = 0;
    let waitingTimesArray = [0];
    for (let i = 1; i < newProcesses.length; i++) {
      waitingTime += newProcesses[i - 1].burstTime;
      waitingTimesArray.push(waitingTime);
      setWaitingTimes(waitingTimesArray);

      const sumWaitingTimes = waitingTimesArray.reduce((a, b) => a + b, 0);
      setAverageWaitingTime(sumWaitingTimes / waitingTimesArray.length);

      const sumTurnaroundTimes = newProcesses.reduce(
        (a, process) => a + process.burstTime,
        0
      );
      setAverageTurnaroundTime(sumTurnaroundTimes / newProcesses.length);
      if (waitingTime >= 500) {
        setStarvationDetected(true);
        return;
      }
    }

    setStarvationDetected(false);
  };

  return (
    <Layout>
      <div className="container mx-auto mt-8">
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            Non-preemptive Priority Scheduling Algorithm
          </h2>
          <p className="mb-4">
            The non-preemptive Priority Scheduling algorithm is a scheduling
            algorithm used by operating systems to prioritize the execution of
            processes based on their priority. Each process is assigned a
            priority value, and the process with the highest priority is
            selected for execution. This algorithm allows a selected process to
            run to completion without interruption.
          </p>
          <h3 className="text-lg font-bold mb-2">
            Advantages of Non-preemptive Priority Scheduling Algorithm:
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Enables the execution of high-priority processes first, ensuring
              timely processing of critical tasks.
            </li>
            <li>
              Allows for the allocation of resources based on priority,
              optimizing system efficiency.
            </li>
            <li>
              Simplifies the scheduling process by selecting the highest
              priority process for execution.
            </li>
            <li>
              Provides fairness by giving higher priority to more important
              processes.
            </li>
          </ul>
          <h3 className="text-lg font-bold mb-2">
            Disadvantages of Non-preemptive Priority Scheduling Algorithm:
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              May result in lower overall system throughput if long-duration
              processes with lower priority are given precedence.
            </li>
            <li>
              Can lead to starvation of lower-priority processes if
              higher-priority processes continuously arrive.
            </li>
            <li>
              Requires an accurate assessment of process priorities, which can
              be challenging in dynamic environments.
            </li>
            <li>
              Does not consider the execution time or burst time of processes,
              which can lead to inefficient utilization of resources.
            </li>
          </ul>
        </div>
        <h1 className="text-2xl text-center mt-8 font-extrabold">
          Non-preemptive Priority Scheduling Algorithm Simulation
        </h1>
        <div className="min-h-screen">
          <form onSubmit={addProcess} className="mb-8">
            <div className="mb-4">
              <label htmlFor="id" className="block text-gray-700">
                Process ID
              </label>
              <input
                type="text"
                id="id"
                name="id"
                value={newProcess.id}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="burstTime" className="block text-gray-700">
                Burst Time
              </label>
              <input
                type="number"
                id="burstTime"
                name="burstTime"
                value={newProcess.burstTime}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="priority" className="block text-gray-700">
                Priority
              </label>
              <input
                type="number"
                id="priority"
                name="priority"
                value={newProcess.priority}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>

            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              Add Process
            </button>
          </form>

          {starvationDetected && (
            <>
              <p className="text-red-500 font-semibold">Starvation detected!</p>
              <img
                src="https://media.tenor.com/TCMtwXLJukAAAAAC/brahmi-krishna.gif"
                className=" rounded-2xl mb-8"
                alt=""
              />
            </>
          )}

          {processes.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-2">Processes:</h2>
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Process ID</th>
                    <th className="px-4 py-2">Burst Time</th>
                    <th className="px-4 py-2">Priority</th>
                    <th className="px-4 py-2">Waiting Time</th>
                  </tr>
                </thead>
                <tbody>
                  {processes.map((process, index) => (
                    <tr key={index} className="odd:bg-gray-100 text-center">
                      <td className="border px-4 py-2">{process.id}</td>
                      <td className="border px-4 py-2">{process.burstTime}</td>
                      <td className="border px-4 py-2">{process.priority}</td>
                      <td className="border px-4 py-2">
                        {waitingTimes[index] !== undefined
                          ? waitingTimes[index]
                          : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4">
                <p className="font-semibold">
                  Average Waiting Time: {averageWaitingTime.toFixed(2)}
                </p>
                <p className="font-semibold">
                  Average Turnaround Time: {averageTurnaroundTime.toFixed(2)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Priority;
