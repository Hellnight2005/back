// Import necessary modules
const express = require("express"); // Import the express module for building the web server
const fs = require("fs"); // Import the file system module for file operations
const zlib = require("zlib"); // Import the zlib module for compression

// Create an instance of an Express application
const app = express();

// Compress the 'sample.txt' file and write the output to 'sample(0.1).zip'
// Create a read stream from the 'sample.txt' file
fs.createReadStream("./sample.txt")
  // Pipe the read stream through gzip compression
  .pipe(zlib.createGzip())
  // Pipe the compressed data to a write stream for 'sample(0.1).zip'
  .pipe(fs.createWriteStream("./sample(0.1).zip"))
  // Log a message when the file compression is complete
  .on("finish", () => console.log("File successfully compressed"));

// Define a route handler for the root URL ('/')
app.get("/", (req, res) => {
  // Create a read stream for the 'sample.txt' file
  const stream = fs.createReadStream("./sample.txt", "utf-8");

  // On receiving data chunks, write them to the response
  stream.on("data", (chunk) => res.write(chunk));
  // End the response when the file stream ends
  stream.on("end", () => res.end());
  // Handle any errors that occur during streaming
  stream.on("error", (err) => {
    console.error(err); // Log the error to the console
    res.status(500).send("Internal Server Error"); // Send an error response to the client
  });
});

// Define the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Log a message indicating the server is running
});
