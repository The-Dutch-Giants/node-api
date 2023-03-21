// import { Sequelize, DataType} from 'sequelize-typescript';
import { Table, Column, Model, PrimaryKey, DataType, AutoIncrement } from 'sequelize-typescript';

@Table
export default class Assignments extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.NUMBER) 
    id: number;

    @Column(DataType.TEXT)
    assignment: string;
}