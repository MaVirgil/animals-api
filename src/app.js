const express =  require('express')
const animalList = require('./data/animals')
const animalsRouter = require('./route/animals.route')
const PORT_NUMBER = 8080;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send({
    data: "connected"
  });
})

app.use('/animals', animalsRouter)

app.listen(PORT_NUMBER, () => {
  console.log(`animalsApi listening on http://localhost:${PORT_NUMBER}`)
})