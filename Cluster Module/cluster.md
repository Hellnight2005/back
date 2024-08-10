# Clustered Express Server Example

This example demonstrates how to create a clustered server using Node.js, the `express` framework, and the `cluster` module. The purpose of clustering is to take advantage of multi-core processors by forking worker processes that can handle requests concurrently.

## Key Components

- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.
- **OS Module**: Used to interact with the operating system and fetch details such as the number of CPU cores.
- **Cluster Module**: Enables the creation of child processes (workers) that can share the same server port, improving the performance by utilizing multiple CPU cores.

## Code Explanation

- **Primary Process Check**: The code checks if the current process is the primary (master) process. If true, it forks a new worker process for each CPU core available.
- **Worker Processes**: If the current process is a worker, it starts an Express server and handles incoming HTTP requests. Each request is processed by a different worker, identified by its unique process ID.
- **Server Response**: When a user visits the root URL (`/`), the server responds with a message that includes the process ID of the worker handling the request and the total number of CPU cores.

## Usage

To run the server, execute the script using Node.js. The server will start on `http://localhost:5000` and will be able to handle requests concurrently using all available CPU cores.

```bash
node server.js
```
