import { secureStorage } from "utilities/js/encryption";

export const Logger = (...data) => console.log(...data);

export const setSecureStorage = (key, initialValue) => {
  secureStorage.setItem(key, JSON.stringify(initialValue));
};

export const getSecureStorage = (key, initialValue) => {
  const item = JSON.parse(secureStorage.getItem(key));

  if (item !== null) return item;

  if (initialValue instanceof Function) return initialValue();

  return initialValue;
};

export const clearSecureStorage = (key, initialValue) => {
  secureStorage.clear();
};

// currency converter
