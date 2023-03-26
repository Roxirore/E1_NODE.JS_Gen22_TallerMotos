const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
  req.requestTime = new Date();
  next();
});

//:::::::::::::::::::::::::INICIO USERS::::::::::::::::::::::::::::::

const findAllUsers = (req, res) => {
  res.json({
    message: 'Rox, estoy en la ruta get users',
  });
};
const createUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: 'Rox, estoy en la ruta post users',
  });
};
const findOneUser = (req, res) => {
  res.json({
    message: 'Rox, estoy en la ruta get one user',
  });
};
const updateUser = (req, res) => {
  console.log(req.params);
  res.json({
    message: 'Rox, estoy en la ruta patch users',
  });
};
const deleteUser = (req, res) => {
  res.json({
    message: 'Rox, estoy en la ruta delete users',
  });
};

// const userRouter = express.Router();

// userRouter.get('/', findAllUsers);
// userRouter.post('/', createUser);
// userRouter.get('/:userid', findOneUser);
// userRouter.patch('/:userid', updateUser);
// userRouter.delete('/:userid', deleteUser);

// app.use('/api/v1/users', userRouter);

app.get('/api/v1/users', findAllUsers);
app.post('/api/v1/users', createUser);
app.get('/api/v1/users/:userid', findOneUser);
app.patch('/api/v1/users/:userid', updateUser);
app.delete('/api/v1/users/:userid', deleteUser);
//:::::::::::::::::::::::FIN USERS::::::::::::::::::::::::::::::::

//:::::::::::::::::::::::::INICIO REPAIRS::::::::::::::::::::::::::::::
const findAllRepairs = (req, res) => {
  res.json({
    message: 'Rox, estoy en la ruta get repairs',
  });
};
const createRepair = (req, res) => {
  console.log(req.body);
  res.json({
    message: 'Rox, estoy en la ruta post repairs',
  });
};
const findOneRepair = (req, res) => {
  res.json({
    message: 'Rox, estoy en la ruta get one repair',
  });
};
const updateRepair = (req, res) => {
  console.log(req.params);
  const { requestTime } = req;
  res.json({
    message: 'Rox, estoy en la ruta patch repairs',
    requestTime,
  });
};
const deleteRepair = (req, res) => {
  res.json({
    message: 'Rox, estoy en la ruta delete repairs',
  });
};
// const repairRouter = express.Router();

// repairRouter.get('/', findAllRepairs);
// repairRouter.post('/', createRepair);
// repairRouter.get('/repair/:id', findOneRepair);
// repairRouter.patch('/repair/:id', updateRepair);
// repairRouter.delete('/repair/:id', deleteRepair);

// app.use('/api/v1/repairs/user/:userid', repairRouter);

app.get('/api/v1/repairs/user/:userid', findAllRepairs);
app.post('/api/v1/repairs/user/:userid', createRepair);
app.get('/api/v1/repairs/user/:userid/repair/:id', findOneRepair);
app.patch('/api/v1/repairs/user/:userid/repair/:id', updateRepair);
app.delete('/api/v1/repairs/user/:userid/repair/:id', deleteRepair);
//:::::::::::::::::::::::FIN REPAIRS::::::::::::::::::::::::::::::::

console.log('Roxanita, me ejecute');
const port = 3030;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
// /api/v1/users
// /api/v1/repairs
