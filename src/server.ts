import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Sequelize } from 'sequelize-typescript';
import Users from './models/userModel';

require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const sequelize = new Sequelize({
    host: process.env.HOST,
    database: process.env.DBNAME,
    dialect: 'mysql',
    port: 3306,
    username: process.env.DBUSERNAME,
    password: process.env.DBPASSWORD,
    models: [__dirname + '/models'],
  });

sequelize.addModels([__dirname + '/**/*.model.ts']);
sequelize.authenticate().then(()=> {
    console.log("db connected")
}).catch((err) => console.log(err))

// Start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/users', async (req, res) => {
    const users = await Users.findAll()
    res.send(users)
})




