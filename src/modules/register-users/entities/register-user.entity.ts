import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('userRegister')
export class RegisterUser {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 30 })
  firstName: string;

  @Column({ length: 30 })
  lastName: string;

  @Column({ length: 30 })
  nickName: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 15 })
  cellphone: number;

  @Column({ length: 225 })
  password: string;

  @CreateDateColumn()
  createdOn: Date;

  @Column({ default: true })
  isActive: boolean;
}
