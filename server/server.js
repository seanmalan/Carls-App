const port = 5001;
const app = require('./app');

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})