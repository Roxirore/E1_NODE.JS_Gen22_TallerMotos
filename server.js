const app = require('./app');
const { dbUsers } = require('./database/users.config');
const { dbRepairs } = require('./database/repairs.config');

dbUsers
  .authenticate()
  .then(() => console.log('DatabaseUsers Authenticated!'))
  .catch((error) => console.log(error));

dbUsers
  .sync()
  .then(() => console.log('DatabaseUsers Synced!'))
  .catch((error) => console.log(error));

dbRepairs
  .authenticate()
  .then(() => console.log('DatabaseRepairs Authenticated!'))
  .catch((error) => console.log(error));

dbRepairs
  .sync()
  .then(() => console.log('DatabaseRepairs Synced!'))
  .catch((error) => console.log(error));

const port = 3030;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
