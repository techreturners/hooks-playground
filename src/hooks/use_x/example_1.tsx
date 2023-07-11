import { useState } from 'react';

export const useToggle = (initialValue = false): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = () => {
    setValue(prevValue => !prevValue);
  };

  return [value, toggle];
};

