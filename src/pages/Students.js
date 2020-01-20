import React, { useState, useEffect } from 'react';
import { Pane, Heading, majorScale } from 'evergreen-ui';

import { searchForStudents } from '../services/student-search';
import StudentFilter from '../components/StudentFilter';
import StudentList from '../components/StudentList';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);
  const [searchFilter, setSearchFilter] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const performSearch = async () => {
      setLoading(true);
      try {
        const studentResults = await searchForStudents(searchFilter);
        setStudents(studentResults);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
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
    <Pane padding={majorScale(4)}>
      <Heading size={900} is="h1">
        Student Search
      </Heading>
      <Pane
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className="filterContainer"
        width="100%"
      >
        <StudentFilter setFilter={e => setSearchFilter(e)}></StudentFilter>
        <StudentList
          students={students}
          loading={loading}
          marginTop={majorScale(3)}
        ></StudentList>
      </Pane>
    </Pane>
  );
};

export default Students;
