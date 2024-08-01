# Sockets

## Definition

A socket is a combination of an IP address and a port number that uniquely identifies a network connection.

## Types

- **TCP Sockets**: Provide reliable, ordered, and error-checked delivery of data between applications.
- **UDP Sockets**: Provide a connectionless service that delivers data with less overhead but without guarantees of order or reliability.

## Usage

- Sockets are used in applications like chat programs, multiplayer games, web browsers, and servers to facilitate communication.
- They allow applications to send and receive data, establish connections, and manage communication sessions.

## Operation

1. A server socket listens for incoming connections from clients.
2. A client socket initiates a connection to the server socket.
3. Once connected, the client and server can send and receive data through the socket.

Overall, sockets are a fundamental technology for network communication, providing a standardized way for applications to exchange data over a network.

# Polling and WebSockets

## Polling

### Definition

Polling is a technique where the client repeatedly requests data from the server at regular intervals.

### Advantages

- Simple to implement and understand.
- Works with older browsers and servers.
- Suitable for applications where real-time updates are not critical.

### Disadvantages

- Inefficient use of bandwidth and server resources.
- Increased latency due to fixed intervals between requests.
- Not suitable for real-time applications that require immediate updates.

### Diagram

```
Client Server
| |
|---Request----->|
| |
|<---Response----|
| |
|---Request----->|
| |
|<---Response----|
| |
(Repeats at fixed intervals)
```

## WebSockets

### Definition

WebSockets provide a full-duplex communication channel over a single, long-lived connection, allowing real-time data exchange between the client and server.

### Advantages

- Real-time communication with low latency.
- Efficient use of bandwidth and server resources.
- Suitable for applications like chat, gaming, and live updates.

### Disadvantages

- More complex to implement compared to polling.
- Requires modern browsers and WebSocket support on the server.
- Persistent connections can consume server resources.

### Diagram

```

```

Client Server
| |
|---Handshake--->|
|<---Response----|
| WebSocket |
| Connection |
| |
|<---Message---->|
| |
|<---Message---->|
| |
(Continuous data exchange)

```

```

## Summary

- **Polling** is simpler but less efficient, suitable for applications where real-time updates are not critical.
- **WebSockets** provide efficient, real-time communication, ideal for applications requiring immediate updates.

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade)
