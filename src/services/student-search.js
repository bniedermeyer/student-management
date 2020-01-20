const searchForStudents = async filters => {
  if (filters) {
    console.log('performing search with following filters', filters);
  }

  const result = await fetch(
    'https://my-json-server.typicode.com/bniedermeyer/student-management/students'
  );
  return result.json();
};

module.exports = {
  searchForStudents
};
