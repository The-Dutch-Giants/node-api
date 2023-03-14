import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Sequelize } from 'sequelize-typescript';
import { User } from './models/userModel';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const sequelize = new Sequelize({
    database: 'prj_2022_2023_mlab1_vh_t5',
    dialect: 'mysql',
    username: 'prj_2022_2023_mlab1_vh_t5',
    password: 'eichahku',
    models: [__dirname + '/models'],
  });

// Start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/users', async (req, res) => {
    const users = await User.findAll()
    res.send(users)
})




