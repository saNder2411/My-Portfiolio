import {useState, useEffect, useCallback} from 'react';


const useRequest = (request) => {

  const [dataState, setDataState] = useState({
    isLoading: false,
    data: null,
    error: null,
  });

  const doRequest = useCallback(() => setDataState({isLoading: true, data: null, error: null}), []);

  useEffect(() => {
    let cancelled = false;

    if (!dataState.isLoading) return;

    request()
      .then((data) => !cancelled && setDataState({isLoading: false, data, error: null}))
      .catch((error) => !cancelled && setDataState({sLoading: false, data: null, error}));

    return () => {
      cancelled = true;
    };

  }, [request, dataState]);

  return [dataState, doRequest];
};

export default useRequest;
