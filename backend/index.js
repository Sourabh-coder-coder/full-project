// const express = require('express');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // parse JSON bodies
// app.use(express.json());

// // Simple health route
// app.get('/', (req, res) => {
//   res.json({ status: 'ok', message: 'Hello from Express!' });

// });
// // i createed route and pass the parametr function and return in this method 
// app.get('/data',(req,res)=>{

//    res.json({message:'how are you'})
// })

// // Example POST route that echoes back bodynpm
// app.post('/echo', (req, res) => {
//   // res.json({ youSent: req.body });3
// });

// // Example parameter route
// app.get('/hello/:name', (req, res) => {
//   const name = req.params.name;
//   res.json({ message: `Hello, ${name}!` });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server listening on http://localhost:${PORT}`);
// });



// // rough


const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Backend is working 🚀"
  });
});

app.get("/api/test", (req, res) => {
  res.json({
    message: "Frontend successfully connected to backend 🎉"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
