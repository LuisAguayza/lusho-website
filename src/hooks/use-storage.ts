type Props<T> = {
  key: string,
  payload: T
}

type Response<T> = {
  stateStorage: T,
  setStorage: (data: T) => void
};

export const useStorage = <T>({ key, payload }: Props<T>): Response<T> => {

  let stateStorage: T;
  let value = localStorage.getItem(key); 
  
  try {
    stateStorage = value ? JSON.parse(value) as T : payload;
  } catch {
    stateStorage = payload
  }

  const setStorage = (value: T) => localStorage.setItem(key, JSON.stringify(value));

  return {
    stateStorage, 
    setStorage
  }
}