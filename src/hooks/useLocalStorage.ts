import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type ReturnType<T> = [T, Dispatch<SetStateAction<T>>];

export const useLocalStorage = <T>(
  key: string,
  initialValue?: T,
): ReturnType<T> => {
  const [state, setState] = useState<T>(() => {
    if (!initialValue) return;

    try {
      const storage = localStorage.getItem(key);

      return storage ? JSON.parse(storage) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  useEffect(() => {
    if (state) {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (err) {
        console.log(err);
      }
    }
  }, [state, key]);

  return [state, setState];
};
