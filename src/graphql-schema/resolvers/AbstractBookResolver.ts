/* eslint-disable class-methods-use-this */

import { Arg, Query, Resolver } from 'type-graphql';
import { Like } from 'typeorm';

import { AbstractBook } from '~/entities/AbstractBook';

@Resolver()
export class AbstractBookResolver {
  @Query(() => [AbstractBook])
  async abstractBooks(
    @Arg('searchQuery', { nullable: true }) searchQuery?: string,
    @Arg('id', { nullable: true }) id?: string,
  ) {
    if (id) {
      const book = await AbstractBook.findOne(id);
      return [book];
    }

    if (searchQuery) {
      return AbstractBook.find({
        name: Like(`%${searchQuery}%`),
      });
    }

    return AbstractBook.find();
  }
}
