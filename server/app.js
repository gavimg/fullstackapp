const express = require('express');
const   app = express();
const bodyParser = require('body-parser');
const  port = process.env.PORT || 3000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

  const result = {
    "data": [
      { "type": "comments", "id": "1" },
      { "type": "mewssages", "id": "2" },
      { "type": "tags", "id": "3" },
      { "type": "shortcuts", "id": "4" },
      { "type": "comments", "id": "5" }
    ]
  }



app.get("/", (req, res) => {
    res.status(200).json(result);
})


app.listen(3000, () => {
  console.log('Server listening in port 3000');
});