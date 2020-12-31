import Storage from './StorageHandler';

/**
 * This class is like a facade to the Storage, it maps the Storage in memory
 * Then it returns this when the application ask for the session object.
 * It calls the storage handler which decides where to storage the information (Current async Storage) but it can use
 * any other database storage system.
 * @author Alejandro <alejandro.devop@gmail.com>
 * @version 1.0.0
 */
class SessionHandler {
  session = null;

  /**
   * Function to initialize the application session.
   * @param defaultSession
   * @returns {Promise<null>}
   */
  initialize = async (defaultSession = {}) => {
    try {
      this.session = await this.read(defaultSession);
      return this.session;
    } catch (e) {
      throw e;
    }
  };

  /**
   * This function reads data from the storage handler, it the data is empty it
   * calls the storage initializer and returns this data.
   * @param defaultSession
   * @returns {Promise<any|boolean>}
   */
  read = async (defaultSession = {}) => {
    try {
      let storage = await Storage.getStore();
      if (storage === false) {
        storage = await Storage.initStorage(defaultSession);
      }
      return storage;
    } catch (e) {
      throw e;
    }
  };

  /**
   * Function to persist the data into the storage.
   * @param key
   * @param value
   * @returns {Promise<void>}
   */
  write = async (key, value) => {
    try {
      await Storage.set(key, value);
    } catch (e) {
      throw e;
    }
  };

  /**
   * Function to save multiple keys into the storage.
   * @param keys
   * @returns {Promise<void>}
   */
  writeAll = async (keys) => {
    try {
      await Storage.setAll(keys);
    } catch (e) {
      throw e;
    }
  };

  /**
   * Function to destroy a key from the storage.
   * @param key
   * @returns {Promise<void>}
   */
  destroy = async (key) => {
    try {
      await Storage.remove(key);
    } catch (e) {
      throw e;
    }
  };

  /**
   * Function to remove multiple keys from the storage.
   * @param keys
   * @returns {Promise<void>}
   */
  destroyAll = async (keys = []) => {
    try {
      await Storage.removeMultiple(keys);
    } catch (e) {
      throw e;
    }
  };

  /**
   * Function to reset the storage and let it empty.
   * @returns {Promise<void>}
   */
  clearStorage = async () => {
    try {
      await Storage.clearStorage();
    } catch (e) {
      throw e;
    }
  };

  /**
   * This function returns a clone of the current session object.
   * @returns {{}}
   */
  getSession = () => ({...this.session});

  /**
   * Function to save a new key in session.
   * @param key
   * @param value
   * @returns {{}}
   */
  setSession = (key, value) => {
    // This persist the storage.
    this.write(key, value);
    return (this.session = {...this.session, [key]: value});
  };

  /**
   * This function save multiple kes in session.
   * @param keys
   * @returns {{}}
   */
  setAll = (keys = {}) => {
    // This persist the storage.
    this.writeAll(keys);
    return (this.session = {...this.session, ...keys});
  };

  /**
   * Function to remove a key from session.
   * @param key
   */
  remove = (key) => {
    // This persist the storage.
    this.destroy(key);
    delete this.session[key];
  };

  /**
   * Function to remove multiple keys from session.
   * @param keys
   */
  removeAll = (keys = []) => {
    // This persist the storage.
    this.destroyAll(keys);
    keys.forEach((key) => {
      delete this.session[key];
    });
  };

  /**
   * Function to clear all session keys
   */
  clear = () => {
    // This persist the storage.
    this.clearStorage();
    this.session = {};
  };
}

const Instance = new SessionHandler();

export default Instance;
