import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
@Entity('abstract_books_tbl')
export class AbstractBook extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'ab_id' })
  id: number;

  @Field(() => String)
  @Column('varchar', { name: 'ab_name' })
  name: string;
}
