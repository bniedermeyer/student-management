import React from 'react';
import { Heading, Pane, Spinner } from 'evergreen-ui';

import Student from '../components/Student';

export default function StudentList(props) {
  let element = null;

  const studentList = props.students.map(student => {
    return (
      <li key={student.id}>
        <Student student={student} />
      </li>
    );
  });
  element = <ul style={{ listStyle: 'none' }}>{studentList}</ul>;
  if (props.loading) {
    element = <Spinner />;
  }
  if (props.students.length === 0) {
    element = <Heading>No Results Found</Heading>;
  }
  return (
    <Pane
      marginTop={20}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {element}
    </Pane>
  );
}
