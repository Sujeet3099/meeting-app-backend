const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });
const app = require('./app');

// console.log(process.env.NODE_ENV);

const DB = process.env.DATABASE_URL.replace(
  '<password>',
  process.env.DATABASE_PASS,
);

// console.log(DB);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() =>
    console.log(
      `DATABASE connected-------------------------------------------.`,
    ),
  );

const port = 3001;
app.listen(port, () => console.log(`Listening to Port ${port} ....`));
