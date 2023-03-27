const app = require('./app');

const port = 3030;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
