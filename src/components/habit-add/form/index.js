import React from 'react';
import {View} from 'react-native';
import {useStyles} from 'theme/hooks';
import {ScrollView} from 'components/commons';
import styles from './styles';
import TextField from 'components/controls/text-field';
import Switch from 'components/controls/switch';

const Form = () => {
  const classes = useStyles(styles);
  return (
    <View style={classes.root}>
      <ScrollView>
        <TextField label="Title" secondary />
        <TextField label="Description" secondary />
        <View style={classes.row}>
          <Switch label="Is counter?" secondary />
        </View>
      </ScrollView>
    </View>
  );
};

export default Form;
