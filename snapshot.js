// This object that we return is a representation of a React component or something like that
export const getCharacter = (data) => ({
  id: data.id,
  name: data.name,
  status: data.status,
  species: data.species,
  gender: data.gender,
})
