import {useCallback} from 'react';
import APIService from '../../service/service';
import useRequest from '../use-request/use-request';


const useService = (lang) => {
  const request = useCallback(() => APIService.getData(lang), [lang]);

  return useRequest(request);
};

export default useService;
