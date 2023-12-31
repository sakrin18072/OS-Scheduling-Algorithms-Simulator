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

class PreemptivePriorityScheduling {
  constructor(processes) {
    this.processes = processes;
    this.totalProcesses = processes.length;
    this.currentTime = 0;
    this.completedProcesses = [];
  }

  execute() {
    const processesCopy = JSON.parse(JSON.stringify(this.processes));

    while (this.completedProcesses.length < this.totalProcesses) {
      let eligibleProcesses = processesCopy.filter(
        (process) => process.arrivalTime <= this.currentTime
      );

      if (eligibleProcesses.length === 0) {
        this.currentTime++;
        continue;
      }

      eligibleProcesses.sort((a, b) => a.priority - b.priority);

      const currentProcess = eligibleProcesses[0];
      const remainingBurstTime = currentProcess.burstTime - 1;

      if (remainingBurstTime === 0) {
        currentProcess.completionTime = this.currentTime + 1;
        currentProcess.turnaroundTime =
          currentProcess.completionTime - currentProcess.arrivalTime;
        currentProcess.waitingTime =
          currentProcess.turnaroundTime - currentProcess.initialBurstTime;
        this.completedProcesses.push(currentProcess);

        processesCopy.splice(processesCopy.indexOf(currentProcess), 1);

        this.currentTime++;
      } else {
        currentProcess.burstTime = remainingBurstTime;
        currentProcess.startTime =
          currentProcess.startTime === 0
            ? this.currentTime
            : currentProcess.startTime;

        processesCopy[processesCopy.indexOf(currentProcess)] = currentProcess;

        this.currentTime++;
      }
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

export const PreemptivePrioritySimulator = (req, res) => {
  try {
    const { processesFromReq } = req.body;
    const processes = [];

    for (let i of processesFromReq) {
      processes.push(new Process(i.id, i.arrivalTime, i.burstTime, i.priority));
    }
    const scheduler = new PreemptivePriorityScheduling(processes);
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
