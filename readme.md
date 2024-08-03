# cors-customizer

A customizable CORS middleware for Express.js applications.

## Installation

```sh
npm install cors-customizer
```

## Usage

```sh
const express = require('express');
const configureCors = require('cors-customizer');

const app = express();

// Default configuration
app.use(configureCors());

// Custom configuration
app.use(configureCors({
  origins: ['https://example.com', 'https://anotherdomain.com'],
  methods: ['GET', 'POST'],
  headers: ['Content-Type', 'Authorization'],
  allowCredentials: true
}));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```
