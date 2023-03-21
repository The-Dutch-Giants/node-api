// import { Sequelize, DataType} from 'sequelize-typescript';
import { Table, Column, Model, PrimaryKey, ForeignKey, DataType, AutoIncrement, BelongsTo } from 'sequelize-typescript';
import Questions from './questionModel';

@Table
export default class Answers extends Model {
    @AutoIncrement
    @PrimaryKey 
    @Column(DataType.NUMBER) 
    id: number;

    @ForeignKey(() => Questions)
    @Column(DataType.NUMBER)
    question_id: number;

    @BelongsTo(() => Questions)
    question: Questions

    @Column(DataType.STRING(255))
    answer: string;

    @Column(DataType.BOOLEAN)
    is_correct: boolean;
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
