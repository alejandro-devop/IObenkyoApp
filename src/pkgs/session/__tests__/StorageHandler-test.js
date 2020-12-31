import StorageHandler from '../StorageHandler';

it('Should initialize store', async () => {
  const mockedStorage = {
    key: 1,
  };
  const store = await StorageHandler.initStorage(mockedStorage);
  expect(store).toMatchObject(mockedStorage);
});

it('should add key', async () => {
  expect.assertions(2);
  const store = await StorageHandler.getStore();
  const mockValue = 25;
  store.newValue = mockValue;
  const saved = await StorageHandler.set('newValue', mockValue);
  const newStore = await StorageHandler.getStore();

  expect(saved).toBe(true);
  expect(newStore).toMatchObject(store);
});

it('Should remove a single key', async () => {
  expect.assertions(2);
  await StorageHandler.set('valueToRemove', true);
  const store = await StorageHandler.getStore();
  expect(store.valueToRemove).toBe(true);
  await StorageHandler.remove('valueToRemove');
  const newStore = await StorageHandler.getStore();
  expect(newStore.valueToRemove).toBeUndefined();
});

it('Should keep containing values', async () => {
  expect.assertions(1);
  const store = await StorageHandler.getStore();
  expect(store).toMatchObject({
    key: 1,
    newValue: 25,
  });
});

it('Should add multiple keys', async () => {
  expect.assertions(2);
  const currentStorage = await StorageHandler.getStore();
  const newKeys = {newKey1: true, newKey2: 2};
  const expectedStore = {...currentStorage, ...newKeys};
  const saved = await StorageHandler.setAll(newKeys);
  expect(saved).toBe(true);
  const updatedStore = await StorageHandler.getStore();
  expect(updatedStore).toMatchObject(expectedStore);
});

it('Should remove multiple keys', async () => {
  expect.assertions(2);
  const currentStorage = await StorageHandler.getStore();
  delete currentStorage.newKey1;
  delete currentStorage.newKey2;
  const removed = await StorageHandler.removeMultiple(['newKey1', 'newKey2']);
  const updatedStore = await StorageHandler.getStore();
  expect(removed).toBe(true);
  expect(currentStorage).toMatchObject(updatedStore);
});

it('Should clear session', async () => {
  expect.assertions(2);
  const cleared = await StorageHandler.clearStorage();
  const currentStorage = await StorageHandler.getStore();
  expect(cleared).toBe(true);
  expect(currentStorage).toMatchObject({});
});
