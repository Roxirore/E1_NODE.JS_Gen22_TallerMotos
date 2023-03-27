const express = require('express');
const morgan = require('morgan');

const usersRoutes = require('./routes/users.routes');
const repairsRoutes = require('./routes/repairs.routes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
  req.requestTime = new Date();
  next();
});

//:::::::::::::::::::::::::INICIO USERS::::::::::::::::::::::::::::::

app.use('/api/v1/users', usersRoutes);

// app.get('/api/v1/users', findAllUsers);
// app.post('/api/v1/users', createUser);
// app.get('/api/v1/users/:userid', findOneUser);
// app.patch('/api/v1/users/:userid', updateUser);
// app.delete('/api/v1/users/:userid', deleteUser);
//:::::::::::::::::::::::FIN USERS::::::::::::::::::::::::::::::::

//:::::::::::::::::::::::::INICIO REPAIRS::::::::::::::::::::::::::::::

app.use('/api/v1/repairs/user/:userid', repairsRoutes);

// app.get('/api/v1/repairs/user/:userid', findAllRepairs);
// app.post('/api/v1/repairs/user/:userid', createRepair);
// app.get('/api/v1/repairs/user/:userid/repair/:id', findOneRepair);
// app.patch('/api/v1/repairs/user/:userid/repair/:id', updateRepair);
// app.delete('/api/v1/repairs/user/:userid/repair/:id', deleteRepair);
//:::::::::::::::::::::::FIN REPAIRS::::::::::::::::::::::::::::::::

console.log('Roxanita, me ejecute');
const port = 3030;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
// /api/v1/users
// /api/v1/repairs
