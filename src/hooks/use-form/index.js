import {useState, useEffect, useRef} from 'react';
import {isEmpty} from 'utils';

/**
 * Hook to handle user forms.
 * @author Alejandro <alejandro.devop@gmail.com>
 * @version 1.0.0
 * @param options
 * @returns {*[]}
 */
const useForm = (options = {}) => {
  const {defaultValues = {}, required = []} = options;
  const [form, setForm] = useState(defaultValues);
  const [isValid, setIsValid] = useState(true);
  const refCheckIsValid = useRef(null);
  const requiredFields =
    typeof required === 'string' ? required.split(',') : required;

  /**
   * Function to check if the form complies with the defined validations
   * @param formToCheck
   */
  const checkIsValid = (formToCheck) => {
    // Checking required
    let hasErrors = false;
    requiredFields.forEach((fieldName) => {
      if (isEmpty(formToCheck[fieldName])) {
        hasErrors = true;
      }
    });
    setIsValid(!hasErrors);
  };

  /**
   * Function to handle the form value changes, it receives a synthetic event.
   * @param name
   * @param value
   */
  const onChange = ({target: {name, value}}) => {
    const newForm = {
      ...form,
      [name]: value,
    };
    setForm(newForm);
    checkIsValid(newForm);
  };

  useEffect(() => {
    refCheckIsValid.current = checkIsValid;
  });
  useEffect(() => {
    refCheckIsValid.current(form);
  }, [form]);

  return [form, onChange, {isValid}];
};

export default useForm;
