const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// init Middleware
app.use(express.json({ extended: false }));
app.use(bodyParser.json());

// Api for nodemailer
app.use('/api/mail', require('./routes/api/mail'));

// Server  static assests in production
if (process.env.NODE_ENV == 'production') {
  // set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
