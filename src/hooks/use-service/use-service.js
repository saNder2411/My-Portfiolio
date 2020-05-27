import {useState} from 'react';
import APIService from '../../service/service';
import useRequest from '../use-request/use-request';


const useService = (lang) => {
  const [request] = useState(() => () => APIService.getData(lang));

  return useRequest(request);
};

export default useService;
