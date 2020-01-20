import React, { useState } from 'react';
import {
  Pane,
  Heading,
  Card,
  Button,
  TextInputField,
  minorScale,
  RadioGroup,
  toaster
} from 'evergreen-ui';

import { addStudent } from '../services/student-utils';

const AddStudent = () => {
  const defaultStudent = {
    name: '',
    active: 'true',
    homeCountry: '',
    exchangeCountry: '',
    homeUni: '',
    gpa: ''
  };
  const [student, setStudent] = useState(defaultStudent);

  const updateStudent = (field, value) => {
    const updatedStudent = { ...student, [field]: value };
    setStudent(updatedStudent);
  };

  const saveStudent = async e => {
    e.preventDefault();
    await addStudent(student);
    toaster.success('Student Created');
  };

  return (
    <Pane>
      <Heading size={900} is="h1">
        Add a Student
      </Heading>
      <Card
        elevation={3}
        border
        padding={minorScale(8)}
        width="50%"
        marginLeft="25%"
        marginTop={minorScale(4)}
        textAlign="left"
      >
        <form onSubmit={e => saveStudent(e)}>
          <Pane display="grid" gridTemplateColumns="repeat(2, auto)">
            <TextInputField
              label="Name"
              value={student.name}
              marginRight={minorScale(2)}
              onChange={e => updateStudent('name', e.target.value)}
            />
            <TextInputField
              label="Home Country"
              value={student.homeCountry}
              marginRight={minorScale(2)}
              onChange={e => updateStudent('homeCountry', e.target.value)}
            />
            <TextInputField
              label="Home University"
              value={student.homeUni}
              marginRight={minorScale(2)}
              onChange={e => updateStudent('homeUni', e.target.value)}
            />
            <TextInputField
              label="ExchangeCountry"
              value={student.exchangeCountry}
              marginRight={minorScale(2)}
              onChange={e => updateStudent('exchangeCountry', e.target.value)}
            />
            <TextInputField
              label="GPA"
              value={student.gpa}
              marginRight={minorScale(2)}
              onChange={e => updateStudent('gpa', e.target.value)}
            />
            <RadioGroup
              label="Active"
              value={student.active}
              options={[
                { label: 'Active', value: 'true' },
                { label: 'Inactive', value: 'false' }
              ]}
              onChange={value => updateStudent('active', value)}
            />
          </Pane>
          <Pane display="flex" justifyContent="flex-end">
            <Button
              type="button"
              onClick={() => setStudent(defaultStudent)}
              marginRight={minorScale(2)}
            >
              Reset Form
            </Button>
            <Button
              marginRight={16}
              appearance="primary"
              iconBefore="save"
              type="submit"
            >
              Save
            </Button>
          </Pane>
        </form>
      </Card>
    </Pane>
  );
};

export default AddStudent;
