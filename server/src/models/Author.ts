import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinTable,
  OneToOne,
} from 'typeorm';
import User from './User';
import AuthorArticle from './AuthorArticle';
import { Length, IsNotEmpty } from 'class-validator';

@Entity()
export default class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(4, 300)
  name: string;

  @Column()
  @Length(4, 300)
  surname: string;

  @Column()
  @Length(4, 300)
  patronymic: string;

  @Column()
  @Length(4, 100)
  @IsNotEmpty()
  city: string;

  @Column()
  @Length(4, 100)
  @IsNotEmpty()
  adress: string;

  @Column()
  @Length(4, 100)
  @IsNotEmpty()
  posteCode: string;

  @Column()
  @Length(4, 100)
  education: string;

  @Column()
  @Length(4, 100)
  @IsNotEmpty()
  specialtyCode: string;

  @Column()
  @Length(4, 100)
  @IsNotEmpty()
  work: string;

  @Column()
  @Length(4, 100)
  @IsNotEmpty()
  position: string;

  @Column()
  @Length(4, 100)
  @IsNotEmpty()
  academicDegree: string;

  @OneToMany(() => AuthorArticle, (authorArticle) => authorArticle.author, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  authorArticle: AuthorArticle[];

  @OneToOne(() => User, (user) => user.author, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  user: User[];

}
