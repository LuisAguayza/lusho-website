type Props<T> = {
  stateStorage: T,
  setStorage: (data: T) => void
};

export const useStorage = <T>(key: string, data: T): Props<T> => {

  const value = localStorage.getItem(key); 
  const setStorage = (value: T) => localStorage.setItem(key, JSON.stringify(value));

  return {
    stateStorage: value ? JSON.parse(value) as T : data,
    setStorage
  }
}