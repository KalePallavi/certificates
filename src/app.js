const  express = require("express");
const cors = require('cors');
const  app = express();

app.use(cors());

require("./db/conn");
const router = require('./router/router');

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

var path = require("path");

app.use(express.static(path.join(__dirname, "../.."))); 

require('dotenv').config();

const  port = process.env.PORT || 3500;

app.use('/', router);

app.listen(port, () => {
console.log(`Server running at ` + port);
});

// const express = require('express');
// const cors = require('cors');
// const app = express();

// // Basic CORS configuration
// app.use(cors());

// // Custom CORS configuration
// const corsOptions = {
//     origin: (origin, callback) => {
//       if (['http://example.com', 'http://anotherdomain.com'].includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization']
//   };
  

// app.use(cors(corsOptions));

// // Your routes and middleware
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
