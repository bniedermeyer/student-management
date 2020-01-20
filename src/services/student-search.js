const searchForStudents = async filters => {
  let url =
    'https://my-json-server.typicode.com/bniedermeyer/student-management/students';

  if (filters) {
    let filtersString = '';
    for (const key in filters) {
      if (filters.hasOwnProperty(key)) {
        const value = filters[key];

        if (value.length > 0) {
          if (filtersString.length > 0) {
            filtersString += '&';
          }
          filtersString += `${key}_like=${value}`;
        }
      }
    }

    if (filtersString.length > 0) {
      url += `?${filtersString}`;
    }
  }

  const result = await fetch(url);
  return result.json();
};

module.exports = {
  searchForStudents
};
