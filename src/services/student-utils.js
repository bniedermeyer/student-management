/**
 * Queries the mock json server for entries that match the givern filters.
 * @param  filters
 */
const searchForStudents = async filters => {
  // todo: add paging for search - since this is a demo project it's ok. In a larger app you'd need a way to not be drowned by the load of results
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
  return await result.json();
};

/**
 * sends a POST request to the json server to add the student to the database.
 * Note - because the project uses my-json-server to host the mock DB, the response is faked by
 * the server and not persisted
 * @param  student
 */
const saveStudentToDatabase = async student => {
  let url =
    'https://my-json-server.typicode.com/bniedermeyer/student-management/students';

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(student)
  });

  return await response.json();
};

export { searchForStudents, saveStudentToDatabase };
