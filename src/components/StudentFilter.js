import React, { useState } from 'react';
import {
  Card,
  Pane,
  TextInputField,
  minorScale,
  Button,
  SelectField
} from 'evergreen-ui';

export default function StudentFilter(props) {
  const defaultFilter = {
    name: '',
    active: '',
    homeCountry: '',
    exchangeCountry: '',
    homeUni: '',
    gpa: ''
  };

  const [filter, setFilter] = useState(defaultFilter);

  const updateSearchFilter = (fieldName, value) => {
    const updatedFilter = { ...filter, [fieldName]: value };

    setFilter(updatedFilter);
  };

  const submitFilter = e => {
    e.preventDefault();

    props.setFilter(filter);
  };

  const clearFilter = () => {
    setFilter(defaultFilter);
    props.setFilter(defaultFilter);
  };

  return (
    <Card elevation={3} border padding={minorScale(8)}>
      <form onSubmit={e => submitFilter(e)}>
        <Pane
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <TextInputField
            label="Name"
            value={filter.name}
            marginRight={minorScale(2)}
            onChange={e => updateSearchFilter('name', e.target.value)}
          />
          <TextInputField
            label="Home Country"
            value={filter.homeCountry}
            marginRight={minorScale(2)}
            onChange={e => updateSearchFilter('homeCountry', e.target.value)}
          />
          <TextInputField
            label="Home University"
            value={filter.homeUni}
            marginRight={minorScale(2)}
            onChange={e => updateSearchFilter('homeUni', e.target.value)}
          />
          <TextInputField
            label="ExchangeCountry"
            value={filter.exchangeCountry}
            marginRight={minorScale(2)}
            onChange={e =>
              updateSearchFilter('exchangeCountry', e.target.value)
            }
          />
          <SelectField
            label="Active"
            onChange={e => updateSearchFilter('active', e.target.value)}
            marginRight={minorScale(2)}
            value={filter.active}
          >
            <option value="">-</option>
            <option value={true}>Active</option>
            <option value={false}>Not Active</option>
          </SelectField>
        </Pane>

        <Button
          marginRight={16}
          appearance="primary"
          iconBefore="search"
          type="submit"
        >
          Search
        </Button>
        <Button onClick={() => clearFilter()}>Clear</Button>
      </form>
    </Card>
  );
}
