# cors-magic

A customizable CORS middleware for Express.js applications.

## Installation

```sh
npm install cors-magic
```

## Usage

```sh
const express = require('express');
const cors = require('cors-magic');

const app = express();

// Default configuration
app.use(cors());

// Custom configuration
app.use(cors({
  origins: ['https://example.com', 'https://anotherdomain.com'],
  methods: ['GET', 'POST'],
  headers: ['Content-Type', 'Authorization'],
  allowCredentials: true
}));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```
