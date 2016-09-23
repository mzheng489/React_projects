//express server
//this is authentication middleware to protect API Endpoint
//cors enables cross origin resource sharing;

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const cors = require('cors');

app.use(cors());

const authCheck = jwt({
  secret : new Buffer('omTOCLt7MykSdM2snHOkWUhgvv_Cqbo2XfZrMgD8ua1vt0XHqW4Dc9Qe92_NapHh', 'base64'),
  audience : 'BrJ3QuEb57NWivl9xpEXH5nA4bq2tKzU'
});

var contacts = [
  {
    id : 1,
    name : 'Chris Sevilleja',
    email : 'chris@scoth.io',
    image : ''

  },
  {
    id : 2,
    name : 'Dan Brown',
    email : 'danB@line.com',
    image : ''

  },
  {
    id : 3,
    name : 'Mama Mia',
    email : 'mama@cookingmama.com',
    image : ''
  }
];

app.get('/api/contacts',(req,res) =>{
  const allContacts = contacts.map(contact => {
    return {id : contact.id, name : contact.name}
  });
  res.json(allContacts);
});

app.get('/api/contacts/:id',authCheck,(req,res) => {
  res.json(contacts.filter(contact => contact.id === parseInt(res.param.id)));
});

app.listen(3001);
console.log('Listening on http://localhost:3001');
