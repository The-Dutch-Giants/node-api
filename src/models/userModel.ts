import { Sequelize, DataType} from 'sequelize-typescript';

const sequelize = new Sequelize("postgres");

export const User = sequelize.define('User', {
    id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    name: {
        type: DataType.CHAR,
    },
    streak: {
        type: DataType.INTEGER
    }
}, {}
)
