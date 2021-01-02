import {useState} from 'react';

/**
 * Hook to toggle values
 * @version 1.0.0
 * @author Alejandro <alejandro.devop@gmail.com>
 * @param defaultValue
 * @returns {[boolean, function(): void]}
 */
const useToggle = (defaultValue = false) => {
  const [visible, setToggle] = useState(defaultValue);
  const toggle = () => setToggle(!visible);
  return [visible, toggle];
};

export default useToggle;
