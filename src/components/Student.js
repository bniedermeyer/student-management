import React from 'react';
import { Pane, Heading, Badge, minorScale } from 'evergreen-ui';

const Student = props => {
  if (!props.student) {
    return null;
  }
  const student = props.student;

  return (
    <Pane border marginBottom={10} width={640}>
      <Pane
        borderBottom
        padding={50}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Heading size={600} marginRight={5}>
          {student.name}
        </Heading>
        <Badge color={student.active ? 'neutral' : 'red'}>
          {student.active ? 'Active' : 'Not Active'}
        </Badge>
      </Pane>
      <Pane padding={minorScale(5)}>
        <ul style={{ textAlign: 'left' }}>
          <li>Home Country: {student.homeCountry}</li>
          <li>Home University: {student.homeUniversity}</li>
          <li>Exchange Country Country: {student.exchangeCountry}</li>
          <li>GPA: {student.gpa}</li>
        </ul>
      </Pane>
    </Pane>
  );
};

export default Student;
