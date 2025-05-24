import { useState } from "react";

type Props<T> = {
  key: string;
  payload: T;
};

type Response<T> = {
  stateStorage: T;
  setStorage: (data: T) => void;
};

export const useStorage = <T>({ key, payload }: Props<T>): Response<T> => {
  const [stateStorage, setStateStorage] = useState<T>(() => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : payload;
    } catch {
      return payload;
    }
  });

  const setStorage = (data: T) => {
    setStateStorage(data);
    localStorage.setItem(key, JSON.stringify(data));
  };

  return {
    stateStorage,
    setStorage,
  };
};
