import {
   Entity,
   PrimaryGeneratedColumn,
   Column,
   OneToMany,
   JoinTable,
 } from 'typeorm';
 import { Length } from 'class-validator';
 import Article from './Article';
 
 @Entity()
 export default class Magazine {
   @PrimaryGeneratedColumn()
   id: number;
 
   @Column()
   @Length(4, 300)
   name: string;
 
   @OneToMany(() => Article, (article) => article.magazine, {
     onDelete: 'CASCADE',
   })
   @JoinTable()
   article: Article[];
 }
 