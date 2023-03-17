// import { Sequelize, DataType} from 'sequelize-typescript';
import { Table, Column, Model, PrimaryKey, DataType, AutoIncrement } from 'sequelize-typescript';

@Table
export default class Users extends Model {
    @AutoIncrement
    @PrimaryKey 
    @Column(DataType.NUMBER) 
    id: number;

    @Column(DataType.STRING(255))
    name: string;

    @Column(DataType.NUMBER)
    streak: number
}

// ----------------- EXAMPLE -----------------
// import { Table, Column, Model, HasMany } from 'sequelize-typescript';

// @Table
// class Person extends Model {
//   @Column
//   name: string;

//   @Column
//   birthday: Date;

//   @HasMany(() => Hobby)
//   hobbies: Hobby[];
// }
