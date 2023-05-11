const { json } = require('express');
const express = require('express');
const app = express();

const path = require('path')
app.use(express.static('client'))




app.get('/',(req, res) => {
  res.sendFile(path.resolve('client','index.html'))
  res.sendStatus(200)

})

app.get('/serverstatus', (req, res) => {
  
})
app.listen(3000, () => console.log('server running'));