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
   const { email, password } = req.body;
  // Handle the incoming data here\
  console.log(email,password);
  console.log('Data received:', req.body);

  // Send a response back to the client
   res.status(200).json({ message: 'Login successful' });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
