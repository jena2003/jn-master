import {
   Entity,
   PrimaryGeneratedColumn,
   Column,
   OneToMany,
   OneToOne,
   JoinTable,
 } from 'typeorm';
 import { Length, IsNotEmpty } from 'class-validator';
 import AuthorArticle from './AuthorArticle';
 import Magazine from './Magazine';
 
 @Entity()
 export default class Article {
   @PrimaryGeneratedColumn()
   id: number;
 
   @Column()
   @Length(4, 300)
   titleArticles: string;
 
   @Column()
   @IsNotEmpty()
   @Length(4, 100)
   doi: string;
 
   @Column()
   @Length(4, 1000)
   @IsNotEmpty()
   content: string;
 
   @Column()
   @Length(4, 300)
   @IsNotEmpty()
   keywords: string;
 
   @Column()
   @Length(4, 300)
   biblecalReference: string;
 
   @OneToMany(() => AuthorArticle, (authorArticle) => authorArticle.article, {
     onDelete: 'CASCADE',
   })
   @JoinTable()
   authorArticle: AuthorArticle[];
 
   @OneToOne(() => Magazine, (magazine) => magazine.article, {
     onDelete: 'CASCADE',
   })
   @JoinTable()
   magazine: Magazine[];
 }
 