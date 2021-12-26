/* eslint-disable class-methods-use-this */

import { Arg, Mutation, Query, Resolver } from 'type-graphql';

import { Author } from '~/entities/Author';

@Resolver()
export class AuthorResolver {
  @Query(() => [Author])
  async authors(@Arg('id', { nullable: true }) id?: string) {
    if (id) {
      const author = await Author.findOne(id);
      return [author];
    }

    return Author.find();
  }

  @Mutation(() => Author)
  async deleteAuthor(@Arg('id') id: string) {
    const author = await Author.findOne(id);
    return author;
  }
}
