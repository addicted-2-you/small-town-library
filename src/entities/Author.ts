import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
@Entity('authors_tbl')
export class Author extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'a_id' })
  id: number;

  @Field(() => String)
  @Column('varchar', { name: 'a_name' })
  name: string;

  @Field(() => String)
  @Column('varchar', { name: 'a_surname' })
  surname: string;

  @Field(() => String)
  @Column('varchar', { name: 'a_patronum' })
  patronum: string;
}
