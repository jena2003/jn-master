import { Entity, PrimaryGeneratedColumn, JoinTable, OneToOne } from 'typeorm';
import Article from './Article';
import Author from './Author';

@Entity()
export default class AuthorArticle {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Author, (author) => author.authorArticle, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  author: Author[];

  @OneToOne(() => Article, (article) => article.authorArticle, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  article: Article[];
}
