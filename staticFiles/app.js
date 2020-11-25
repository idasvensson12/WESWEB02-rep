const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '\\staticFiles\\'))
app.use(express.json())
app.use(express.urlencoded())


app.post('/test', function (req, res) {
 
  console.log(req.body.message);
  res.redirect('/')
})



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))

app.post('/', function (req, res) {
res.send('Post request to the homepage')
})