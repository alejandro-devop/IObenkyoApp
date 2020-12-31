import SessionHandler from '../SessionHandler';
import StorageHandler from '../StorageHandler';

it('Should initialize session', async () => {
  expect.assertions(1);
  const defaultSession = {
    key: true,
  };
  const session = await SessionHandler.initialize(defaultSession);
  expect(session).toMatchObject(defaultSession);
});

it('should add a key to the storage', function () {
  expect.assertions(1);
  const session = SessionHandler.getSession();
  SessionHandler.setSession('updatedKey', true);
  const updatedSession = SessionHandler.getSession();
  expect(updatedSession).toMatchObject({
    ...session,
    updatedKey: true,
  });
});

it('Should add multiple keys to session', async () => {
  expect.assertions(1);
  const session = SessionHandler.getSession();
  const newKeys = {updatedKey1: true, updatedKey2: true};
  const expectedSession = {...session, ...newKeys};
  SessionHandler.setAll(newKeys);
  const updatedSession = SessionHandler.getSession();
  expect(updatedSession).toMatchObject(expectedSession);
});

it('Should remove key from session: ', async () => {
  expect.assertions(1);
  const session = SessionHandler.getSession();
  delete session.updatedKey2;
  SessionHandler.remove('updatedKey2');
  const updatedSession = SessionHandler.getSession();
  expect(session).toMatchObject(updatedSession);
});

it('Should remove multiple keys', async () => {
  expect.assertions(1);
  SessionHandler.removeAll(['updatedKey', 'updatedKey1']);
  const session = SessionHandler.getSession();
  expect(session).toMatchObject({
    key: true,
  });
});

it('Should clear storage', async () => {
  expect.assertions(1);
  SessionHandler.clear();
  const session = SessionHandler.getSession();
  expect(session).toMatchObject({});
});

it('Should match async storage', async () => {
  expect.assertions(1);
  const session = SessionHandler.getSession();
  const asyncStorage = await StorageHandler.getStore();
  expect(session).toMatchObject(asyncStorage);
});
