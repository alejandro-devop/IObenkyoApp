import React, {useState} from 'react';
import {View} from 'react-native';
import TextField from 'components/controls/text-field';
import Text from 'components/base/text';
import PasswordField from 'components/controls/password-field';
import Button from 'components/buttons/button';
import {Card} from 'components/containers';
import {useStyles} from 'theme/hooks';
import styles from 'components/login-form/styles';
import {isEmpty} from 'utils';

const Form = ({error, isLoading, onSubmit}) => {
  const classes = useStyles(styles);
  const [form, setForm] = useState({
    userName: '',
    password: '',
  });
  const onChange = ({target: {name, value}}) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const {userName, password} = form;
  const isValid = !isEmpty(userName) && !isEmpty(password);
  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(form);
    }
  };
  return (
    <Card style={classes.card}>
      <TextField
        autoCapitalize="none"
        autoCorrect={false}
        label="User name"
        name="userName"
        onChange={onChange}
        placeholder="Enter your user name"
        value={userName}
      />
      <PasswordField
        label="Password"
        name="password"
        onChange={onChange}
        placeholder="Enter your password"
        value={password}
      />
      {Boolean(error) && (
        <Text style={classes.errorMessage}>User or password wrong</Text>
      )}
      <View style={classes.actions}>
        <Button
          disabled={!isValid}
          isLoading={isLoading}
          onPress={handleSubmit}>
          Submit
        </Button>
      </View>
    </Card>
  );
};

export default Form;
