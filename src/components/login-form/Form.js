import React, {useState} from 'react';
import {Image, View} from 'react-native';
import TextField from 'components/controls/text-field';
import Text from 'components/base/text';
import PasswordField from 'components/controls/password-field';
import Button from 'components/buttons/button';
import {Card} from 'components/containers';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import {isEmpty} from 'utils';
import bookIcon from 'assets/icons/book-icon.png';
import LinkButton from 'components/buttons/link-button';

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
  const handleRegister = () => {};
  return (
    <View style={classes.root}>
      <Card style={classes.card}>
        <Image source={bookIcon} style={classes.image} />
        <View style={classes.content}>
          <Text variant="title" style={classes.title}>
            Ready to boost your life?
          </Text>
          <TextField
            autoCapitalize="none"
            autoCorrect={false}
            label="User name"
            name="userName"
            onChange={onChange}
            placeholder="Enter your user name"
            secondary
            value={userName}
          />
          <PasswordField
            label="Password"
            name="password"
            onChange={onChange}
            placeholder="Enter your password"
            secondary
            value={password}
          />
          {Boolean(error) && (
            <Text style={classes.errorMessage}>User or password wrong</Text>
          )}
        </View>
        <View style={classes.actions}>
          <Button
            disabled={!isValid}
            isLoading={isLoading}
            onPress={handleSubmit}>
            Submit
          </Button>
        </View>
        <View style={classes.actions}>
          <LinkButton onPress={handleRegister}>
            Don't have an account?
          </LinkButton>
        </View>
      </Card>
    </View>
  );
};

export default Form;
