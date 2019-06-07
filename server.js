const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/users');
const md5 = require('blueimp-md5');


const app = express();

const port = 5000;
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/api/customers', (req, res) => {
  User.find((err, data) => {
    if (err) {
      return res.status(200).json({success: false});
    }
    return res.status(200).json(data);
  });
});

app.post('/api/customers', (req, res) => {
  const body = req.body;
  body.password = md5(md5(body.password ));
  console.log('body: ', body);
  User.findOne({username: body.username}, (err, data) => {
    if (err) {
      return res.status(500).json({err_code: 500, message: 'Server error'});
    }
    if (data) {
      return res.status(200).json({err_code: 1, message: 'Username already exists.'});
    } 
    new User(body).save((err, data) => {
      if (err) {
        return res.json({err_code: 500, message: 'Server error'});
      }
      res.status(200).json({err_code: 0, message: 'OK'});
    });

  });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
