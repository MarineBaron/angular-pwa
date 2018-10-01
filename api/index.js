const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const origins = [
  'http://localhost:4200',
  'http://localhost:1234'
];

const datas = [
  {id: 1, name: "Tony"},
  {id: 2, name: "Lisa"},
  {id: 3, name: "Michael"}
];

const corsOptions = {
  origin: function(origin, callback){
      callback(null, origins.indexOf(origin) !== -1);
  },
  credentials:true
};
app.use(cors(corsOptions));


app.get("/url", (req, res, next) => {
  console.log('GET /url');
  res.status(200).send(datas);
});

app.post("/url", (req, res, next) => {
  console.log('POST /url', req.body);
  const data = req.body;
  const index = datas.findIndex(d => d.id === data.id);
  datas[index] = data;
  res.status(200).send(data);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});