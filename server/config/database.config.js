const mongoose = require('mongoose'),
  uri = 'mongodb://mongo:27017/userDB';

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(console.log("Connected to mongo"))
  .catch(e => console.error('Connection error', e.message));