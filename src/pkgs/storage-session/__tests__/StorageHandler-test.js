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
