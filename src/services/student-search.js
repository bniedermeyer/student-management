const searchForStudents = async filters => {
  const result = await fetch(
    'https://my-json-server.typicode.com/bniedermeyer/student-management/students'
  );
  return result.json();
};

module.exports = {
  searchForStudents
};
