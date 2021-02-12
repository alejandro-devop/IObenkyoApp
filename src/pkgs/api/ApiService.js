/**
 * This class allows to execute api requests
 * @author Alejandro <alejandro.devop@gmail.com>
 * @version 1.0.0
 */
class ApiService {
  endpoints = {};
  server = 'http://localhost';
  token = null;
  /**
   * Sets the api resource endpoints, it must be an object key:value pairs
   * (Also supports sub-items)
   * @param endpointsList
   * @returns {*}
   */
  setEndpoints = (endpointsList) => (this.endpoints = endpointsList);

  /**
   * Sets the base api url
   * @param serverUrl
   * @returns {*}
   */
  setServer = (serverUrl) => (this.server = serverUrl);

  /**
   * Sets the token that will be used in the Authorize header
   * @param newToken
   * @returns {*}
   */
  setToken = (newToken) => (this.token = newToken);

  /**
   * Function to extract the url from the endpoints object, it allows
   * to replace parts from the urls
   * @param path
   * @param replacements
   * @returns {{}}
   */
  resolveUrl = (path, replacements) => {
    const parts = path.split('.');
    let resolved = parts.reduce(
      (newValue, currentPart) => {
        if (newValue[currentPart]) {
          newValue = newValue[currentPart];
        } else {
          newValue = false;
        }
        return newValue;
      },
      {...this.endpoints},
    );
    if (replacements && typeof replacements === 'object') {
      const keys = Object.keys(replacements);
      keys.forEach((key) => {
        resolved = resolved.replace(
          new RegExp(`\{${key}\}`),
          replacements[key],
        );
      });
    }
    return resolved;
  };

  /**
   * This function sends any request, POST, PUT, PATCH, etc.
   * @param path
   * @param payload
   * @param options
   * @returns {Promise<any>}
   */
  doRequest = async (path, payload = {}, options = {}) => {
    const {method = 'GET', headers = {}, replace} = options;
    if (method !== 'GET' && method !== 'POST') {
      payload._method = method;
    }
    try {
      const url = this.resolveUrl(path, replace);
      if (url === false) {
        throw new Error(`Url ${path} does not exists`);
      }

      const requestPayload = {
        method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: this.token ? `Bearer ${this.token}` : null,
          ...headers,
        },
        body: method === 'GET' ? null : JSON.stringify(payload),
      };
      const requestUrl = `${this.server}${url}`;
      const response = await fetch(requestUrl, requestPayload);
      const {status} = response;
      // Todo: handle statuses
      if (response && ![404].includes(status)) {
        return await response.json();
      }
      return false;
    } catch (e) {
      throw e;
    }
  };

  /**
   * Function to execute a get request only.
   * @param path
   * @param options
   * @returns {Promise<any>}
   */
  doGet = async (path, options = {}) => {
    return await this.doRequest(path, {}, options);
  };

  /**
   * Function to execute a post request only.
   * @param path
   * @param payload
   * @param options
   * @returns {Promise<any>}
   */
  doPost = async (path, payload = {}, options = {}) => {
    return await this.doRequest(path, payload, {...options, method: 'POST'});
  };

  /**
   * function to execute a post request only.
   * @param path
   * @param payload
   * @param options
   * @returns {Promise<any>}
   */
  doPut = async (path, payload = {}, options = {}) => {
    return await this.doRequest(path, payload, {...options, method: 'PUT'});
  };

  /**
   * Function to execute a patch request only.
   * @param path
   * @param payload
   * @param options
   * @returns {Promise<any>}
   */
  doPatch = async (path, payload = {}, options = {}) => {
    return await this.doRequest(path, payload, {...options, method: 'PATCH'});
  };

  /**
   * Function to execute a delete request only.
   * @param path
   * @param payload
   * @param options
   * @returns {Promise<any>}
   */
  doDelete = async (path, payload = {}, options = {}) => {
    return await this.doRequest(path, payload, {...options, method: 'DELETE'});
  };
}

const Instance = new ApiService();

export default Instance;
