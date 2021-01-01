class ApiService {
  endpoints = {};
  server = 'http://localhost';
  token = null;

  setEndpoints = (endpointsList) => (this.endpoints = endpointsList);

  setServer = (serverUrl) => (this.server = serverUrl);

  setToken = (newToken) => (this.token = newToken);

  resolveUrl = (path, replacements) => {
    const parts = path.split('.');
    let resolved = parts.reduce(
      (newValue, currentPart) => {
        if (newValue[currentPart]) {
          newValue = newValue[currentPart];
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

  doRequest = async (path, payload = {}, options = {}) => {
    const {method = 'GET', headers = {}, replace} = options;
    if (method !== 'GET' && method !== 'POST') {
      payload._method = method;
    }
    try {
      const url = this.resolveUrl(path, replace);
      const response = await fetch(`${this.server}/${url}`, {
        method,
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: this.token ? `Bearer ${this.token}` : null,
          ...headers,
        },
        body: method === 'GET' ? null : JSON.stringify(payload),
      });
      return await response.json();
    } catch (e) {
      throw e;
    }
  };

  doGet = async (path, options = {}) => {
    return await this.doRequest(path, {}, options);
  };

  doPost = async (path, payload = {}, options = {}) => {
    return await this.doRequest(path, payload, {...options, method: 'POST'});
  };

  doPut = async (path, payload = {}, options = {}) => {
    return await this.doRequest(path, payload, {...options, method: 'PUT'});
  };

  doPatch = async (path, payload = {}, options = {}) => {
    return await this.doRequest(path, payload, {...options, method: 'PATCH'});
  };

  doDelete = async (path, options = {}) => {
    return await this.doRequest(path, {}, {...options, method: 'DELETE'});
  };
}

const Instance = new ApiService();

export default Instance;
