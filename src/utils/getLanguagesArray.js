export const getLanguagesArray = (repositoryArray) => {
  return repositoryArray.reduce((accumulator, { language }) => {
    if (language && !accumulator.includes(language)) {
      return [...accumulator, language];
    }
    return accumulator;
  }, []);
};
