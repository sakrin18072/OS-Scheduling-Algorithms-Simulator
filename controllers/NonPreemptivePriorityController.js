class Process {
  constructor(id, arrivalTime, burstTime, priority) {
    this.id = id;
    this.arrivalTime = arrivalTime;
    this.burstTime = burstTime;
    this.priority = priority;
    this.startTime = 0;
    this.completionTime = 0;
    this.waitingTime = 0;
    this.turnaroundTime = 0;
    this.initialBurstTime = burstTime;
  }
}

class NonPreemptivePriorityScheduling {
  constructor(processes) {
    this.processes = processes;
    this.totalProcesses = processes.length;
    this.completedProcesses = [];
  }

  execute() {
    // Sort the processes based on priority and arrival time
    this.processes.sort((a, b) => {
      if (a.priority === b.priority) {
        return a.arrivalTime - b.arrivalTime;
      } else {
        return a.priority - b.priority;
      }
    });

    let currentTime = 0; // Initialize the current time

    for (const currentProcess of this.processes) {
      // If the process hasn't arrived yet, wait until it arrives
      if (currentTime < currentProcess.arrivalTime) {
        currentTime = currentProcess.arrivalTime;
      }

      // Set the start time and completion time for the current process
      currentProcess.startTime = currentTime;
      currentProcess.completionTime = currentTime + currentProcess.burstTime; // Use burstTime here
      currentProcess.turnaroundTime =
        currentProcess.completionTime - currentProcess.arrivalTime;
      currentProcess.waitingTime =
        currentProcess.turnaroundTime - currentProcess.initialBurstTime;

      // Move the current time to the completion time of the current process
      currentTime = currentProcess.completionTime;

      // Add the completed process to the list
      this.completedProcesses.push(currentProcess);
    }
  }

  calculateAverageWaitingTime() {
    const totalWaitingTime = this.completedProcesses.reduce(
      (acc, process) => acc + process.waitingTime,
      0
    );
    return totalWaitingTime / this.totalProcesses;
  }

  calculateAverageTurnaroundTime() {
    const totalTurnaroundTime = this.completedProcesses.reduce(
      (acc, process) => acc + process.turnaroundTime,
      0
    );
    return totalTurnaroundTime / this.totalProcesses;
  }
}

export const NonPreemptivePrioritySimulator = (req, res) => {
  try {
    const { processesFromReq } = req.body;
    const processes = [];

    for (let i of processesFromReq) {
      processes.push(new Process(i.id, i.arrivalTime, i.burstTime, i.priority));
    }
    const scheduler = new NonPreemptivePriorityScheduling(processes);
    scheduler.execute();
    const completedProcesses = scheduler.completedProcesses;

    const averageWaitingTime = scheduler
      .calculateAverageWaitingTime()
      .toFixed(2);
    const averageTurnaroundTime = scheduler
      .calculateAverageTurnaroundTime()
      .toFixed(2);
    res.send({
      success: true,
      completedProcesses,
      averageTurnaroundTime,
      averageWaitingTime,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};
