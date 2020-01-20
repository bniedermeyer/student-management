import React from 'react';
import { Pane, Heading, Badge, minorScale } from 'evergreen-ui';

const Student = props => {
  if (!props.student) {
    return null;
  }
  const student = props.student;

  return (
    <Pane border marginBottom={10} display="flex" width="100%">
      <Pane
        borderRight
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        padding={minorScale(5)}
      >
        <Heading size={600}>{student.name}</Heading>
      </Pane>
      <Pane padding={minorScale(5)}>
        <Badge color={student.active ? 'neutral' : 'red'} marginBottom={5}>
          {student.active ? 'Active' : 'Not Active'}
        </Badge>
        <ul style={{ textAlign: 'left' }}>
          <li>Home Country: {student.homeCountry}</li>
          <li>Home University: {student.homeUni}</li>
          <li>Exchange Country Country: {student.exchangeCountry}</li>
          <li>GPA: {student.gpa}</li>
        </ul>
      </Pane>
    </Pane>
  );
};

export default Student;
