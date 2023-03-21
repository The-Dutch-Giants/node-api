// import { Sequelize, DataType} from 'sequelize-typescript';
import { Table, Column, Model, PrimaryKey, ForeignKey, DataType, AutoIncrement, HasMany } from 'sequelize-typescript';
import Answers from './answerModel';

@Table
export default class Questions extends Model {
    @AutoIncrement
    @PrimaryKey 
    @Column(DataType.NUMBER) 
    id: number;

    @Column(DataType.TEXT)
    question: string;

    @ForeignKey(() => Answers)
    @Column(DataType.NUMBER)
    answer_id: number

    @HasMany(() => Answers)
    answer: Answers[]
}

// Questions.findOne({ include: [Answers] }).then((answers) => {
//     questions.answers.forEach((answer) => console.log(`Player ${answer.answer}`));
//   });

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
