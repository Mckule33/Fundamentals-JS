//creating an
require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.post('/user', (req, res) => {
  const { name, email } = req.body;
  console.log(req.body);
  if (typeof name !== 'string' || typeof email !== 'string') {
    return res.status(400).json({ error: 'Missing name or email' });
  }
  res.send(`Hello ${name}, have a nice day!`);
});
app.get('/', (req, res) => {
    res.send('MY WEEK-2 API!')
})

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.send(`User ${id} profile`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
