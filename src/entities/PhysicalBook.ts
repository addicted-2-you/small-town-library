import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
@Entity('physical_books_tbl')
export class PhysicalBook extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'pb_id' })
  id: number;

  @Field(() => String)
  @Column('varchar', { name: 'pb_name' })
  name: string;

  @Field(() => String)
  @Column('date', { name: 'pb_publishingdate' })
  publishingDate: string;
}

@ObjectType()
export class GroupedPhysicalBook {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  publishingDate: string;

  @Field(() => Int)
  count: number;
}
