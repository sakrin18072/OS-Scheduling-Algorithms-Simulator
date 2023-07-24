class Process {
  constructor(id, arrivalTime, burstTime) {
    this.id = id;
    this.arrivalTime = arrivalTime;
    this.burstTime = burstTime;
    this.startTime = 0;
    this.completionTime = 0;
    this.waitingTime = 0;
    this.turnaroundTime = 0;
    this.initialBurstTime = burstTime;
  }
}

class PreemptiveSJFScheduling {
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
        (process) =>
          process.arrivalTime <= this.currentTime && process.burstTime > 0
      );

      if (eligibleProcesses.length === 0) {
        this.currentTime++;
        continue;
      }

      eligibleProcesses.sort((a, b) => a.burstTime - b.burstTime);

      const currentProcess = eligibleProcesses[0];
      currentProcess.burstTime--;

      if (currentProcess.burstTime === 0) {
        currentProcess.completionTime = this.currentTime + 1;
        currentProcess.turnaroundTime =
          currentProcess.completionTime - currentProcess.arrivalTime;
        currentProcess.waitingTime =
          currentProcess.turnaroundTime - currentProcess.burstTime;
        this.completedProcesses.push(currentProcess);
      }

      this.currentTime++;
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

export const preemptiveSJFSimulator = (req, res) => {
  try {
    const { processesFromReq } = req.body;
    const processes = [];

    for (let i of processesFromReq) {
      processes.push(new Process(i.id, i.arrivalTime, i.burstTime ));
    }
    const scheduler = new PreemptiveSJFScheduling(processes);
    scheduler.execute();
    scheduler.completedProcesses.forEach(process=>process.waitingTime = process.waitingTime - process.initialBurstTime);
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
