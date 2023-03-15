import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Sequelize } from 'sequelize-typescript';
import Users from './models/userModel';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const sequelize = new Sequelize({
    host: 'https://sql.hosted.hro.nl',
    database: 'prj_2022_2023_mlab1_vh_t5',
    dialect: 'mysql',
    username: 'prj_2022_2023_mlab1_vh_t5',
    password: 'eichahku',
    models: [__dirname + '/models'],
  });

sequelize.addModels([__dirname + '/**/*.model.ts']);

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




