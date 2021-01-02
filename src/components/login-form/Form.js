import React, {useState} from 'react';
import {View} from 'react-native';
import TextField from 'components/controls/text-field';
import PasswordField from 'components/controls/password-field';
import Button from 'components/buttons/button';
import {Card} from 'components/containers';
import {useStyles} from 'theme/hooks';
import styles from 'components/login-form/styles';
import {isEmpty} from 'utils';

const Form = ({onSubmit}) => {
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
      <View style={classes.actions}>
        <Button disabled={!isValid} onPress={onSubmit}>
          Submit
        </Button>
      </View>
    </Card>
  );
};

export default Form;
