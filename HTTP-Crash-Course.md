# HTTP (HyperText Transfer Protocol)

HTTP is a protocol used for communication and data transfer between clients and servers.

## HTTP Headers

Headers in HTTP are metadata, consisting of key-value pairs, sent along with requests and responses. They are used for various purposes such as caching, authentication, and managing state.

- **Request Headers:** Sent from the client.
- **Response Headers:** Sent from the server.
- **Representation Headers:** Deal with encoding and compression.
- **Payload Headers:** Related to data.

### Most Common Headers

- `Accept`: Specifies the desired media type for the response.
- `User-Agent`: Identifies the user agent making the request.
- `Authorization`: Provides authentication credentials.
- `Content-Type`: Indicates the media type of the resource in the request or response.
- `Cookie`: Includes cookies previously sent by the server.
- `Cache-Control`: Directives for caching mechanisms.

### Core Headers

- `Access-Control-Allow-Origin`
- `Access-Control-Allow-Credentials`
- `Access-Control-Allow-Method`

## HTTP Methods

HTTP methods define a basic set of operations for interacting with a server.

- **GET:** Retrieve a resource.
- **HEAD:** Similar to GET but without a message body (response headers only).
- **OPTIONS:** Inquire about the communication options available.
- **TRACE:** Performs a loopback test to get data.
- **DELETE:** Remove a resource.
- **PUT:** Replace a resource.
- **POST:** Interact with a resource, often used for adding.
- **PATCH:** Change part of a resource.

## HTTP Status Codes

HTTP status codes indicate the outcome of an HTTP request.

- **1xx:** Informational
- **2xx:** Success
- **3xx:** Redirection
- **4xx:** Client error
- **5xx:** Server error
