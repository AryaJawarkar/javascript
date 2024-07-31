let express = require("express");
const app = express();

app.use(express.json());

const user = [{
  name: "arya",
  kidney: [{
    healthy: false
  }]
}];

app.get('/', (req, res) => {
  let userKidney = user[0].kidney;
  let totKidney = userKidney.length;
  let numberOfHealthyKidneys = 0;
  for (let index = 0; index < userKidney.length; index++) {
    if (userKidney[index].healthy) {

      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }

  }
  const numberOfunHealthyKidneys = totKidney - numberOfHealthyKidneys;
  res.json({
    totKidney,
    numberOfHealthyKidneys,
    numberOfunHealthyKidneys
  });
})

app.post('/', (req, res) => {
  const isHealthy = req.body.isHealthy;
  user[0].kidney.push({
    healthy: isHealthy
  });
  res.json({
    "msg": "Done"
  });
})

app.put('/', (req, res) => {
  for (let index = 0; index < user[0].kidney.length; index++) {
    user[0].kidney[index].healthy = true;

  }
  res.json({
    "msg": "Done"
  });
})

app.delete('/', (req, res) => {
  user[0].kidney.filter((x) => {

  });
})

app.listen(3000, () => {
  console.log("listening on 3000");
});
