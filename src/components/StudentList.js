import React from 'react';
import { Heading } from 'evergreen-ui';

import Student from '../components/Student';

export default function StudentList(props) {
  if (props.students.length === 0) {
    return <Heading>No Results Found</Heading>;
  }
  const studentList = [];
  props.students.forEach(student => {
    studentList.push(
      <li key={student.id}>
        <Student student={student} />
      </li>
    );
  });
  return (
    <>
      <ul style={{ listStyle: 'none' }}>{studentList}</ul>
    </>
  );
}
