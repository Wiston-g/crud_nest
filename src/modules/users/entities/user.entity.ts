import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  nickName: string;

  @Column()
  email: string;

  @Column()
  cellphone: number;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
