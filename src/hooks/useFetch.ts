import { useState, useEffect } from "react";

//TODO: add payload type
export type ApiCallType<T> = () => Promise<T>;

export type CallbackType<T> = (arg: T) => unknown;

export type UseFetchReturnType<T> = {
  data: T;
  isFetching: boolean;
  reload: () => void;
};

export type UseFetchType = <T = unknown>(
  apiCall: ApiCallType<T>,
  initData?: T,
  callback?: CallbackType<T>,
) => UseFetchReturnType<T | undefined>;
//  todo: add error type

export function useFetch<T>(
  apiCall: ApiCallType<T>,
): UseFetchReturnType<T | undefined>;
export function useFetch<T>(
  apiCall: ApiCallType<T>,
  initData: T,
): UseFetchReturnType<T>;
export function useFetch<T>(
  apiCall: ApiCallType<T>,
  initData?: T,
): UseFetchReturnType<T | undefined> | UseFetchReturnType<T> {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState(initData);

  useEffect(() => {
    void reload();
    //   must have return cleanup here when axios is integrated
  }, []);

  async function reload() {
    setIsFetching(true);
    try {
      const res = await apiCall();
      setData(res);
    } catch (e) {
      console.log(e);
      throw e;
    } finally {
      setIsFetching(false);
    }
  }

  return {
    data,
    isFetching,
    reload: () => void reload(),
  };
}
