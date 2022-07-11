const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Is Sservice 1 is still the awesome!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})