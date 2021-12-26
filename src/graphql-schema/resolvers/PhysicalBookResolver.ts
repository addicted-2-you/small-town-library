/* eslint-disable class-methods-use-this */

import { Arg, Query, Resolver } from 'type-graphql';

import myKnex from '~/server/my-knex';

import { GroupedPhysicalBook, PhysicalBook } from '~/entities/PhysicalBook';

import { formatGroupedPhysicalBookRaw, formatPhysicalBookRaw } from '~/utils/physical-books.util';

@Resolver()
export class PhysicalBookResolver {
  @Query(() => [PhysicalBook])
  physicalBooks() {
    return PhysicalBook.find();
  }

  @Query(() => [GroupedPhysicalBook])
  async groupedPhysicalBooks(@Arg('searchQuery', { nullable: true }) searchQuery?: string) {
    const physicalBooks = await myKnex('physical_books_tbl')
      .select('pb_name', 'pb_publishingdate')
      .where((builder) => {
        builder.where('pb_name', 'like', `%${searchQuery}%`);
      })
      .groupBy('pb_name', 'pb_publishingdate')
      .count('*', { as: 'pb_count' });

    return physicalBooks.map(formatGroupedPhysicalBookRaw);
  }

  @Query(() => [PhysicalBook])
  async physicalBooksGroupList(
    @Arg('name', { nullable: true }) name: string,
    @Arg('publishingDate', { nullable: true }) publishingDate: string,
  ) {
    const physicalBooks = await myKnex('physical_books_tbl')
      .select('*')
      .where((builder) => {
        builder.where('pb_name', name).andWhere('pb_publishingdate', publishingDate);
      });

    return physicalBooks.map(formatPhysicalBookRaw);
  }
}
