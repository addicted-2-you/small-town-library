export const formatAuthorsQueryResult = (authorQueryResult) => ({
  id: authorQueryResult.a_id,
  name: authorQueryResult.a_name,
  surname: authorQueryResult.a_surname,
  patronum: authorQueryResult.a_patronum,
});
