const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the CORS package

const app = express();

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON request body
app.use(bodyParser.json());
app.get('/',(req,res)=>{
res.send("gkgjvhvgj")
})
// Your POST endpoint
app.post('/post', (req, res) => {
  // Handle the incoming data here\
  console.log("hi");
  res.send("hi yhis is node")
  console.log('Data received:', req.body);

  // Send a response back to the client
  // res.json({ message: 'Data received successfully' });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
