import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORE_NAME = '__session_store__';

/**
 * This class handles the application storage, it can use any database system in the future, currently it uses
 * Async storage, but here's where you must implement the save methods.
 * using singleton pattern
 * @author Alejandro <alejandro.devop@gmail.com>
 * @version
 */
class StorageHandler {
  store = null;

  /**
   * Function to get the storage, it checks from async storage only once.
   * @returns {Promise<boolean|any>}
   */
  getStore = async () => {
    try {
      if (this.store === null) {
        this.store = await AsyncStorage.getItem(STORE_NAME);
        if (this.store) {
          this.store = JSON.parse(this.store);
        } else {
          this.store = {};
        }
        return this.store ? {...this.store} : false;
      } else {
        return {...this.store};
      }
    } catch (e) {
      throw e;
    }
  };

  /**
   * Function to initialize the storage
   * @param defaultValues
   * @returns {Promise<null>}
   */
  initStorage = async (defaultValues = {}) => {
    try {
      const store = await this.getStore();
      this.store = store !== false ? store : defaultValues;
      await this.persistStore();
      return this.store !== false ? {...this.store} : this.store;
    } catch (e) {
      throw e;
    }
  };

  /**
   * Function to persist the data to the async storage.
   * @returns {Promise<void>}
   */
  persistStore = async () => {
    try {
      await AsyncStorage.setItem(STORE_NAME, JSON.stringify(this.store));
    } catch (e) {
      throw e;
    }
  };

  /**
   * This function sets a new key into the storage.
   * @param key
   * @param value
   * @returns {Promise<boolean>}
   */
  set = async (key, value) => {
    try {
      this.store[key] = value;
      await this.persistStore();
      return true;
    } catch (e) {
      throw e;
    }
  };

  /**
   * This function allows to set multiple keys into storage.
   * @param keys
   * @returns {Promise<boolean>}
   */
  setAll = async (keys = {}) => {
    this.store = {
      ...this.store,
      ...keys,
    };
    await this.persistStore();
    return true;
  };

  /**
   * This function allows to remove multiple keys from the storage.
   * @param keys
   * @returns {Promise<boolean>}
   */
  removeMultiple = async (keys = []) => {
    keys.map((key) => {
      delete this.store[key];
    });
    await this.persistStore();
    return true;
  };

  /**
   * This function allows to clear the storage.
   * @returns {Promise<boolean>}
   */
  clearStorage = async () => {
    this.store = {};
    await this.persistStore();
    return true;
  };

  /**
   * This function removes a key from the storage.
   * @param key
   * @returns {Promise<boolean>}
   */
  remove = async (key) => {
    try {
      delete this.store[key];
      this.persistStore();
      return true;
    } catch (e) {
      throw e;
    }
  };
}

const Instance = new StorageHandler();

export default Instance;
