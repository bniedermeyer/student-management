import React, { useState, useEffect } from 'react';

import { searchForStudents } from '../services/student-search';
import { Pane, Heading } from 'evergreen-ui';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const performSearch = async () => {
      try {
        const studentResults = await searchForStudents();
        setStudents(studentResults);
      } catch (error) {
        setError(error);
      }
    };

    performSearch();
  }, [students]);

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
    </Pane>
  );
};

export default Students;
