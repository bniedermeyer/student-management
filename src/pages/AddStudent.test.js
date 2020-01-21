import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import renderer, { act } from 'react-test-renderer';
import AddStudent from './AddStudent';
import { saveStudentToDatabase } from '../services/student-utils';

jest.mock('../services/student-utils.js', () => {
  return {
    __esModule: true,
    saveStudentToDatabase: jest.fn(() => Promise.resolve({ id: 1 }))
  };
});

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('should render the page', () => {
  const tree = renderer.create(<AddStudent />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should save the student to the database', async () => {
  act(() => {
    render(<AddStudent />, container);
  });
  const button = container.querySelector('.btn-save');
  const name = container.querySelector('.student-name');

  act(() => {
    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value'
    ).set;
    nativeInputValueSetter.call(name, 'Ron Swanson');

    const event = new Event('change', { bubbles: true });
    name.dispatchEvent(event);
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(saveStudentToDatabase).toBeCalledWith({
    name: 'Ron Swanson',
    active: 'true',
    homeCountry: '',
    exchangeCountry: '',
    homeUni: '',
    gpa: ''
  });
});
