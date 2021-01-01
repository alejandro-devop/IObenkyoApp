import {ApiContext} from 'pkgs/api/ApiProvider';

import {useContext, useEffect, useRef, useState} from 'react';

/**
 * Hook to reuse states from the request.
 * @returns {{setLoading: *, Api: ApiService, loading: *}}
 */
export const useRequest = (options = {}) => {
  const {startLoading = false} = options;
  const [loading, setLoading] = useState(startLoading);
  const [data, setData] = useState([]);
  const Api = useContext(ApiContext);
  return {
    Api,
    data,
    loading,
    setLoading,
    setData,
  };
};

/**
 *
 * @param path
 * @param options
 * @returns {{data: *, loading: *}}
 */
export const useGet = (path, options = {}) => {
  const {Api, data, loading, setData, setLoading} = useRequest({
    startLoading: true,
  });
  const sendRequest = useRef();
  const requestHandler = async () => {
    const response = await Api.doGet(path, {...options});
    setData(response);
    setLoading(false);
  };

  useEffect(() => {
    sendRequest.current = requestHandler;
  });

  useEffect(() => {
    sendRequest.current();
  }, []);

  return {
    data,
    loading,
  };
};

/**
 * Hook to execute a post request, it allows to override its method and use a Put, Patch, Delete request.
 * @param path url where you want to send the request, it must be a dot.notation string
 * @param options Options that are passed directly to the api service
 * @returns {[*, sendRequest]}
 */
export const usePost = (path, options = {}) => {
  const {Api, loading, setLoading} = useRequest();
  const {__method__ = 'post'} = options;
  const sendRequest = async (payload, optionsOverride = {}) => {
    try {
      setLoading(true);
      let requestFN = Api.doPost;
      if (__method__ === 'put') {
        requestFN = Api.doPut;
      } else if (__method__ === 'patch') {
        requestFN = Api.doPatch;
      } else if (__method__ === 'delete') {
        requestFN = Api.doDelete;
      }
      const response = await requestFN(path, payload, {
        ...options,
        ...optionsOverride,
      });
      setLoading(false);
      return response;
    } catch (e) {
      //Todo: Add error notifier
      setLoading(false);
      throw e;
    }
  };
  return [loading, sendRequest];
};

/**
 * Hook to send put requests.
 * @param path url where you want to send the request, it must be a dot.notation string
 * @param options Options that are passed directly to the api service
 * @returns {[*, *]}
 */
export const usePut = (path, options = {}) => {
  const [loading, sendRequest] = usePost(path, {...options, __method__: 'put'});
  return [loading, sendRequest];
};

/**
 * Hook to send patch requests
 * @param path url where you want to send the request, it must be a dot.notation string
 * @param options Options that are passed directly to the api service
 * @returns {[*, *]}
 */
export const usePatch = (path, options = {}) => {
  const [loading, sendRequest] = usePost(path, {
    ...options,
    __method__: 'patch',
  });
  return [loading, sendRequest];
};

/**
 * Hook to send delete requests
 * @param path url where you want to send the request, it must be a dot.notation string
 * @param options Options that are passed directly to the api service
 * @returns {[*, *]}
 */
export const useDelete = (path, options = {}) => {
  const [loading, sendRequest] = usePost(path, {
    ...options,
    __method__: 'delete',
  });
  return [loading, sendRequest];
};