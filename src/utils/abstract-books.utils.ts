export const formatAbstractBooksResult = (abstractBookResult) => ({
  id: abstractBookResult.ab_id,
  name: abstractBookResult.ab_name,
  description: abstractBookResult.ab_description,

  ...{
    ...(abstractBookResult.a_id
      ? {
          id: abstractBookResult.a_id,
          name: abstractBookResult.a_name,
          surname: abstractBookResult.a_surname,
          patronum: abstractBookResult.a_patronum,
        }
      : null),
  },
});
