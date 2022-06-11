import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import User from './User';

@Entity()
export default class Document {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  file: string;
  @ManyToOne(() => User, (user) => user.document)
    user: User

}
