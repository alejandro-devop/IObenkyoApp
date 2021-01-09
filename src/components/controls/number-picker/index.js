import React, {useState} from 'react';
import TextField from 'components/controls/text-field';
import IconButton from 'components/buttons/icon-button';
import {isEmpty} from 'utils';

const NumberPicker = ({
  label,
  name,
  min = 0,
  max,
  onChange,
  secondary,
  enableEdit,
  step = 1,
  value = 0,
}) => {
  const [counter, setCounter] = useState(value);

  const handleChangeText = (inputValue) => {
    if (isEmpty(inputValue) || isNaN(inputValue)) {
      setCounter(0);
      return false;
    }
    const parsedValue = parseInt(inputValue, 10);
    if (parsedValue < min) {
      return false;
    } else if (!isEmpty(max) && parsedValue > max) {
      return false;
    }
    setCounter(parsedValue);
    handleChange(parsedValue);
  };

  const handleChange = (newValue) => {
    if (onChange) {
      onChange({
        target: {
          name,
          value: newValue,
        },
      });
    }
  };

  const handleAdd = () => {
    const nextCount = counter + step;
    if (!isEmpty(max) && nextCount > max) {
      return false;
    }
    setCounter(nextCount);
    handleChange(nextCount);
  };
  const handleSubtract = () => {
    const nextCount = counter - step;
    if (nextCount < min) {
      return false;
    }
    setCounter(nextCount);
    handleChange(nextCount);
  };
  return (
    <TextField
      addOn={() => (
        <IconButton
          disabled={!isEmpty(max) && counter >= max}
          icon="plus"
          onPress={handleAdd}
        />
      )}
      center
      onlyMask={!enableEdit}
      keyboardType={'number-pad'}
      label={label}
      preOn={() => (
        <IconButton
          disabled={counter <= min}
          icon="minus"
          onPress={handleSubtract}
        />
      )}
      secondary={secondary}
      onChange={({target: {value: inputValue}}) => handleChangeText(inputValue)}
      value={counter.toString()}
    />
  );
};

export default NumberPicker;
