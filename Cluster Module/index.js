// Importing required modules
const express = require("express"); // Express framework for handling HTTP requests
const os = require("os"); // OS module to interact with the operating system
const cluster = require("node:cluster"); // Cluster module for creating child processes

// Initialize Express app
const app = express();
const PORT = 5000; // Define the port on which the server will run

// Get the total number of CPU cores available
const totalcpu = os.cpus().length;

// Check if the current process is the primary process (the master process)
if (cluster.isPrimary) {
  // Fork child processes for each CPU core
  for (let index = 0; index < totalcpu; index++) {
    cluster.fork(); // Create a new worker process
  }
} else {
  // Define a route handler for the root URL
  app.get("/", (req, res) => {
    // Send a response with a message, including the process ID and total CPU cores
    return res.send(
      `Happy birthday, process ID: ${process.pid}, and ${totalcpu}`
    );
  });

  // Start the server and listen on the specified port
  app.listen(PORT, console.log(`http://localhost:${PORT}`));
}
