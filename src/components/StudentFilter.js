import React, { useState } from 'react';
import {
  Card,
  Heading,
  TextInputField,
  minorScale,
  Button,
  SelectField
} from 'evergreen-ui';

export default function StudentFilter(props) {
  const [filter, setFilter] = useState({
    name: '',
    active: '',
    homeCountry: '',
    exchangeCountry: '',
    homeUni: '',
    gpa: ''
  });

  const updateSearchFilter = (fieldName, value) => {
    const updatedFilter = { ...filter, [fieldName]: value };
    console.log('updated filter', updatedFilter);
    setFilter(updatedFilter);
  };

  const submitFilter = e => {
    e.preventDefault();
    console.log('submitting filter', filter);
    props.setFilter(filter);
  };

  return (
    <Card elevation={3} border height={500} width={350} padding={minorScale(5)}>
      <Heading>Search</Heading>
      <form onSubmit={e => submitFilter(e)}>
        <TextInputField
          label="Name"
          value={filter.name}
          onChange={e => updateSearchFilter('name', e.target.value)}
        />
        <TextInputField
          label="Home Country"
          value={filter.homeCountry}
          onChange={e => updateSearchFilter('homeCountry', e.target.value)}
        />
        <TextInputField
          label="Home University"
          value={filter.homeUni}
          onChange={e => updateSearchFilter('homeUni', e.target.value)}
        />
        <TextInputField
          label="ExchangeCountry"
          value={filter.exchangeCountry}
          onChange={e => updateSearchFilter('exchangeCountry', e.target.value)}
        />
        <SelectField
          label="Active"
          onChange={e => updateSearchFilter('active', e.target.value)}
          value={filter.active}
        >
          <option value="">-</option>
          <option value={true}>Active</option>
          <option value={false}>Not Active</option>
        </SelectField>
        <Button
          marginRight={16}
          appearance="primary"
          iconBefore="search"
          type="submit"
        >
          Search
        </Button>
      </form>
    </Card>
  );
}
