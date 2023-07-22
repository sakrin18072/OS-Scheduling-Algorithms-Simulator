n = int(input("Enter number of processes: "))

arrival_time = []
burst_time = []  
priority = [0] * (n+1)

for i in range(n):
    arrival_time.append(int(input(f"Enter arrival time for process {i+1}: ")))
    burst_time.append(int(input(f"Enter burst time for process {i+1}: "))) 
    priority[i] = int(input(f"Enter priority for process {i+1}: "))
    print()

priority[n] = 10000

x = burst_time[:]
waiting_time = [0] * n
turnaround_time = [0] * n
completion_time = [0] * n

time = 0
count = 0

while count != n:
    smallest = n
    for i in range(n):
        if arrival_time[i] <= time and priority[i] < priority[smallest] and burst_time[i] > 0:
            smallest = i
    burst_time[smallest] -= 1
    
    if burst_time[smallest] == 0:
        count += 1
        completion_time[smallest] = time + 1
        waiting_time[smallest] = completion_time[smallest] - arrival_time[smallest] - x[smallest]
        turnaround_time[smallest] = completion_time[smallest] - arrival_time[smallest]

    time += 1

avg_waiting_time = 0
avg_turnaround_time = 0
for i in range(n):
    avg_waiting_time += waiting_time[i]
    avg_turnaround_time += turnaround_time[i]

avg_waiting_time /= n
avg_turnaround_time /= n
print('\n\n')

print("Process \t Burst Time \t Arrival Time \t Waiting Time \t Turnaround Time \t Completion Time \t Priority")

for i in range(n):
    print(f"p{i+1} \t\t {x[i]} \t\t {arrival_time[i]} \t\t {waiting_time[i]} \t\t {turnaround_time[i]} \t\t\t {completion_time[i]} \t\t\t {priority[i]}")

print(f"\nAverage waiting time = {avg_waiting_time}") 
print(f"Average turnaround time = {avg_turnaround_time}")