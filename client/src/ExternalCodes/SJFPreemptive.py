# Python program to implement Shortest Remaining Time First

# Shortest Remaining Time First (SRTF)

import math


class Process:
    def __init__(self, pid, bt, art):
        self.pid = pid  # Process ID
        self.bt = bt  # Burst Time
        self.art = art  # Arrival Time


# Function to find the waiting time for all processes
def findWaitingTime(proc, n, wt):
    rt = [0] * n

    # Copy the burst time into rt[]

    for i in range(n):
        rt[i] = proc[i].bt

    complete = 0
    t = 0
    minm = math.inf
    shortest = 0
    finish_time = 0
    check = False

    # Process until all processes gets completed
    while complete != n:
        # Find process with minimum remaining time among the processes that arrives till the current time`
        for j in range(n):
            if (proc[j].art <= t) and (rt[j] < minm) and rt[j] > 0:
                minm = rt[j]
                shortest = j
                check = True

        if check == False:
            t += 1
            continue

        # Reduce remaining time by one
        rt[shortest] -= 1

        # Update minimum
        minm = rt[shortest]
        if minm == 0:
            minm = math.inf

        # If a process gets completely executed
        if rt[shortest] == 0:
            # Increment complete
            complete += 1
            check = False

            # Find finish time of current process
            finish_time = t + 1

            # Calculate waiting time
            wt[shortest] = finish_time - proc[shortest].bt - proc[shortest].art
            if wt[shortest] < 0:
                wt[shortest] = 0

        # Increment time
        t += 1


# Function to calculate turn around time
def findTurnAroundTime(proc, n, wt, tat):
    # calculating turnaround time by adding bt[i] + wt[i]
    for i in range(n):
        tat[i] = proc[i].bt + wt[i]


# Function to calculate average time
def findavgTime(proc, n):
    wt = [0] * n
    tat = [0] * n

    total_wt = 0
    total_tat = 0

    # Function to find waiting time of all processes
    findWaitingTime(proc, n, wt)

    # Function to find turn around time for all processes
    findTurnAroundTime(proc, n, wt, tat)

    print("P\t\tBT\tWT\tTAT")

    # Calculate total waiting time and total turnaround time
    for i in range(n):
        total_wt = total_wt + wt[i]
        total_tat = total_tat + tat[i]
        print(" ", proc[i].pid, "\t\t", proc[i].bt, "\t\t", wt[i], "\t\t", tat[i])

    print("\nAverage waiting time = ", (float(total_wt) / float(n)))
    print("Average turn around time = ", (float(total_tat) / float(n)))


# Driver code
if __name__ == "__main__":
    n = int(input("Enter number of processes: "))

proc = []

# Take process details as input
for i in range(n):
    pid = int(input("Enter Process ID: "))
    bt = int(input("Enter Burst Time: "))
    art = int(input("Enter Arrival Time: "))
    proc.append(Process(pid, bt, art))

# Rest of the code remains same

findavgTime(proc, n)
