const express =  require('express')
const animalsRouter = require('./route/animals.route')
const PORT_NUMBER = 8080;

const app = express();

app.get('/', (req, res) => {
  res.send({
    data: "ok"
  });
})

app.use('/animals', animalsRouter)

app.listen(PORT_NUMBER, () => {
  console.log(`animalsApi listening on http://localhost:${PORT_NUMBER}`)
})