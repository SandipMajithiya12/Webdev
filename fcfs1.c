#include<stdio.h>
#include<stdlib.h>

struct Process {
    int pid;          // Process ID
    int arrivalTime;  // Arrival time
    int burstTime;    // Burst time
    int waitingTime;  // Waiting time
    int turnaroundTime;  // Turnaround time
};

void fcfs(struct Process *proc, int n) {
    int i, j, currentTime = 0;
    float avgWaitingTime = 0, avgTurnaroundTime = 0;

    // Calculate waiting time and turnaround time for each process
    for (i = 0; i < n; i++) {
        proc[i].waitingTime = currentTime - proc[i].arrivalTime;
        if (proc[i].waitingTime < 0) {
            currentTime = proc[i].arrivalTime;
            proc[i].waitingTime = 0;
        }
        proc[i].turnaroundTime = proc[i].waitingTime + proc[i].burstTime;
        currentTime += proc[i].burstTime;
        avgWaitingTime += proc[i].waitingTime;
        avgTurnaroundTime += proc[i].turnaroundTime;
    }

    // Print the results
    printf("Process ID\tArrival Time\tBurst Time\tWaiting Time\tTurnaround Time\n");
    for (i = 0; i < n; i++) {
        printf("%d\t\t%d\t\t%d\t\t%d\t\t%d\n", proc[i].pid, proc[i].arrivalTime,
            proc[i].burstTime, proc[i].waitingTime, proc[i].turnaroundTime);
    }
    avgWaitingTime /= n;
    avgTurnaroundTime /= n;
    printf("Average waiting time: %.2f\nAverage turnaround time: %.2f\n", avgWaitingTime, avgTurnaroundTime);
}

int main() {
    int n, i;
    printf("Enter the number of processes: ");
    scanf("%d", &n);

    struct Process *proc = malloc(n * sizeof(struct Process));
    if (proc == NULL) {
        printf("Error: memory allocation failed\n");
        exit(1);
    }

    // Input process data
    for (i = 0; i < n; i++) {
        printf("Process %d:\n", i+1);
      
        printf("Arrival time: ");
        scanf("%d", &proc[i].arrivalTime);
        printf("Burst time: ");
        scanf("%d", &proc[i].burstTime);
    }

    // Sort processes based on arrival time
    for (i = 0; i < n; i++) {
        int j, minIdx = i;
        for (j = i+1; j < n; j++) {
            if (proc[j].arrivalTime < proc[minIdx].arrivalTime) {
                minIdx = j;
            }
        }
        struct Process tmp = proc[minIdx];
        proc[minIdx] = proc[i];
        proc[i] = tmp;
    }

    fcfs(proc, n);  // Run FCFS scheduling algorithm

    free(proc);  // Deallocate memory
    return 0;
}
