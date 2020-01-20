import React, { useState, useEffect } from 'react';
import { Pane, Heading } from 'evergreen-ui';

import { searchForStudents } from '../services/student-search';
import StudentFilter from '../components/StudentFilter';
import StudentList from '../components/StudentList';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);
  const [searchFilter, setSearchFilter] = useState(null);

  useEffect(() => {
    const performSearch = async () => {
      try {
        const studentResults = await searchForStudents(searchFilter);
        setStudents(studentResults);
      } catch (error) {
        setError(error);
      }
    };

    performSearch();
  }, [searchFilter]);

  if (error) {
    return (
      <div>
        Error Searching<div>{error.message}</div>
      </div>
    );
  }

  return (
    <Pane>
      <Heading size={700}>Student Search</Heading>
      <Pane display="flex" className="filterContainer" padding={15}>
        <StudentFilter
          flex={0.5}
          setFilter={e => setSearchFilter(e)}
        ></StudentFilter>
        <StudentList flex={2} students={students}></StudentList>
      </Pane>
    </Pane>
  );
};

export default Students;
