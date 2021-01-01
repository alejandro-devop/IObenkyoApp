import {ApiContext} from 'pkgs/api/ApiProvider';

import {useContext} from 'react';

export const useGet = () => {
  const ApiService = useContext(ApiContext);

};

export const usePost = () => {};

export const usePut = () => {};

export const usePatch = () => {};

export const useDelete = () => {};
