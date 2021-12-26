import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users_tbl')
export class User {
  @PrimaryGeneratedColumn({ name: 'u_id' })
  id: number;

  @Column({ name: 'u_login' })
  login: string;

  @Column({ name: 'u_passwordhash' })
  passwordHash: string;
}
