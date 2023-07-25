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

class NonPreemptiveSJFScheduling {
  constructor(processes) {
    this.processes = processes;
    this.totalProcesses = processes.length;
    this.completedProcesses = [];
  }

  execute() {
    const processesCopy = JSON.parse(JSON.stringify(this.processes));

    processesCopy.sort((a, b) => a.arrivalTime - b.arrivalTime);

    let currentTime = 0;

    while (processesCopy.length > 0) {
      const eligibleProcesses = processesCopy.filter(
        (process) => process.arrivalTime <= currentTime
      );

      if (eligibleProcesses.length === 0) {
        currentTime++;
        continue;
      }

      eligibleProcesses.sort((a, b) => a.burstTime - b.burstTime);

      const currentProcess = eligibleProcesses[0];

      currentProcess.startTime = currentTime;
      currentProcess.completionTime = currentTime + currentProcess.initialBurstTime;
      currentProcess.turnaroundTime =
        currentProcess.completionTime - currentProcess.arrivalTime;
      currentProcess.waitingTime =
        currentProcess.turnaroundTime - currentProcess.initialBurstTime;

      this.completedProcesses.push(currentProcess);

      processesCopy.splice(processesCopy.indexOf(currentProcess), 1);

      currentTime = currentProcess.completionTime;
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

export const NonPreemptiveSJFSimulator = (req, res) => {
  try {
    const { processesFromReq } = req.body;
    const processes = [];

    for (let i of processesFromReq) {
      processes.push(new Process(i.id, i.arrivalTime, i.burstTime));
    }
    const scheduler = new NonPreemptiveSJFScheduling(processes);
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
