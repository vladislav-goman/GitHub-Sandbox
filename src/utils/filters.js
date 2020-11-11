export const filterByLanguage = ({ items, selectedLanguages }) => {
  if (!selectedLanguages.length) {
    return items;
  }
  return items.filter(({ language }) => selectedLanguages.includes(language));
};

export const findItemByName = ({ items, searchTerm }) => {
  if (!searchTerm) {
    return items;
  }
  return items.filter(({ name, description }) => name?.includes(searchTerm) || description?.includes(searchTerm));
};

export const sortAscByName = (items) => {
  const shallowCopy = [...items];
  shallowCopy.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });
  return shallowCopy;
};

export const sortDescByName = (items) => {
  const shallowCopy = [...items];
  shallowCopy.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }

    return 0;
  });
  return shallowCopy;
};

export const sortByLastUpdated = (items) => {
  const shallowCopy = [...items];
  shallowCopy.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
  return shallowCopy;
};

export const orderingTypesMap = {
  Ascending: sortAscByName,
  Descending: sortDescByName,
  'Last updated': sortByLastUpdated,
};
