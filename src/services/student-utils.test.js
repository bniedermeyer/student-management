import { searchForStudents, saveStudentToDatabase } from './student-utils';

describe('searchForStudents', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should make a request for all students if no filters present', () => {
    fetch.mockResponseOnce(JSON.stringify(mockResponse));
    const onResponse = jest.fn();
    const onError = jest.fn();

    return searchForStudents(null)
      .then(onResponse)
      .catch(onError)
      .finally(result => {
        expect(onResponse).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();

        expect(fetch).toBeCalledWith(
          'https://my-json-server.typicode.com/bniedermeyer/student-management/students'
        );
      });
  });

  it('should make a request with the given filters', () => {
    const filter = {
      name: 'Lilly-Rose Montoya',
      active: true,
      homeCountry: 'USA',
      exchangeCountry: 'Germany',
      homeUni: 'MIT'
    };
    fetch.mockResponseOnce(JSON.stringify(mockResponse[0]));
    const onResponse = jest.fn();
    const onError = jest.fn();

    return searchForStudents(filter)
      .then(onResponse)
      .catch(onError)
      .finally(result => {
        expect(onResponse).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();

        expect(fetch).toBeCalledWith(
          'https://my-json-server.typicode.com/bniedermeyer/student-management/students?name_like=Lilly-Rose Montoya&homeCountry_like=USA&exchangeCountry_like=Germany&homeUni_like=MIT'
        );
      });
  });
});

describe('saveStudentToDatabase', () => {
  const student = {
    name: 'Lilly-Rose Montoya',
    active: true,
    homeCountry: 'USA',
    exchangeCountry: 'Germany',
    homeUni: 'MIT',
    gpa: '3.6'
  };

  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should post the data to the database', () => {
    fetch.mockResponseOnce(JSON.stringify({ id: 1 }));
    const onResponse = jest.fn();
    const onError = jest.fn();
    const expectedRequestOptions = {
      method: 'POST',
      body: JSON.stringify(student)
    };

    return saveStudentToDatabase(student)
      .then(onResponse)
      .catch(onError)
      .finally(() => {
        expect(onResponse).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();

        expect(fetch).toBeCalledWith(
          'https://my-json-server.typicode.com/bniedermeyer/student-management/students',
          expectedRequestOptions
        );
      });
  });
});

const mockResponse = [
  {
    id: 1,
    name: 'Lilly-Rose Montoya',
    active: true,
    homeCountry: 'USA',
    exchangeCountry: 'Germany',
    homeUni: 'MIT',
    gpa: '3.6'
  },
  {
    id: 2,
    name: 'Eleri Acosta',
    active: true,
    homeCountry: 'Canada',
    exchangeCountry: 'Italy',
    homeUni: 'UBC',
    gpa: '3.0'
  },
  {
    id: 3,
    name: 'Zane Floyd',
    active: false,
    homeCountry: 'France',
    exchangeCountry: 'Germany',
    homeUni: 'Sorbonne University',
    gpa: '4.0'
  },
  {
    id: 4,
    name: 'Ada Schmidt',
    active: true,
    homeCountry: 'Germany',
    exchangeCountry: 'USA',
    homeUni: 'Freie Uni. Berlin',
    gpa: '3.4'
  }
];
