import ApiService from '../ApiService';
import endpoints from '../../../config/endpoints';
const apiServer = 'http://i-obenkyo-api.test';

ApiService.setEndpoints(endpoints);
ApiService.setServer(apiServer);

global.fetch = async (url, config = {}) => {
  const {method, headers, body} = config;
  const data = {
    headers: headers,
    body: body,
    method,
    type: method,
  };
  return {
    json: async () => ({...data}),
  };
};

it('Check url resolver', async () => {
  expect.assertions(2);
  let urlExpected = endpoints.test.checkApi;
  let urlResolved = ApiService.resolveUrl('test.checkApi');
  expect(urlResolved).toBe(urlExpected);
  const id = 1;
  urlExpected = `/api/test/check/${id}`;
  urlResolved = ApiService.resolveUrl('test.checkApiParams', {id});
  expect(urlResolved).toBe(urlExpected);
});

it('Check do requests using doRequest', async () => {
  let response = await ApiService.doRequest('test.checkApi');
  expect.assertions(5);
  expect(response).toMatchObject({
    body: null,
    headers: {accept: 'application/json', 'Content-Type': 'application/json'},
    method: 'GET',
    type: 'GET',
  });
  const payload = {newKey: true};
  const expectedPayload = JSON.stringify(payload);
  response = await ApiService.doRequest('test.checkApi', payload, {
    method: 'POST',
  });
  expect(response).toMatchObject({
    method: 'POST',
    body: expectedPayload,
  });

  response = await ApiService.doRequest('test.checkApi', payload, {
    method: 'PUT',
  });
  expect(response).toMatchObject({
    method: 'PUT',
    body: JSON.stringify({...payload, _method: 'PUT'}),
  });

  response = await ApiService.doRequest('test.checkApi', payload, {
    method: 'PATCH',
  });
  expect(response).toMatchObject({
    method: 'PATCH',
    body: JSON.stringify({...payload, _method: 'PATCH'}),
  });

  response = await ApiService.doRequest('test.checkApi', payload, {
    method: 'DELETE',
  });
  expect(response).toMatchObject({
    method: 'DELETE',
    body: JSON.stringify({...payload, _method: 'DELETE'}),
  });
});

it('Should use facades to generate different request', async () => {
  let response = await ApiService.doGet('test.checkApi');
  expect(response).toMatchObject({
    body: null,
    headers: {accept: 'application/json', 'Content-Type': 'application/json'},
    method: 'GET',
    type: 'GET',
  });
  const payload = {newKey: true};
  const expectedPayload = JSON.stringify(payload);

  response = await ApiService.doPost('test.checkApi', payload);
  expect(response).toMatchObject({
    method: 'POST',
    body: expectedPayload,
  });

  response = await ApiService.doPut('test.checkApi', payload);
  expect(response).toMatchObject({
    method: 'PUT',
    body: JSON.stringify({...payload, _method: 'PUT'}),
  });

  response = await ApiService.doPatch('test.checkApi', payload);
  expect(response).toMatchObject({
    method: 'PATCH',
    body: JSON.stringify({...payload, _method: 'PATCH'}),
  });

  response = await ApiService.doDelete('test.checkApi');
  expect(response).toMatchObject({
    method: 'DELETE',
    body: JSON.stringify({_method: 'DELETE'}),
  });
});

it('should authenticate', async () => {
  const testToken = '__TEST_ACCESS_TOKEN__';
  ApiService.setToken(testToken);
  const response = await ApiService.doGet('test.checkApi');
  expect(response).toMatchObject({
    body: null,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${testToken}`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
    type: 'GET',
  });
});
