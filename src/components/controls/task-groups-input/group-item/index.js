import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import Text from 'components/base/text';
import RadioButton from 'components/controls/radio-button';

const GroupItem = ({group = {}, onSelect, selected}) => {
  const classes = useStyles(styles);
  const {name, description} = group;
  const Wrapper = selected ? View : TouchableOpacity;

  const handleSelect = () => {
    onSelect(group);
  };

  return (
    <Wrapper style={classes.root} onPress={handleSelect}>
      <RadioButton checked={selected} size="sm" secondary />
      <View style={classes.textWrapper}>
        <Text style={[classes.text, classes.textItem]} variant="paragraph">
          {name}
        </Text>
        <Text style={[classes.text, classes.textCaption]}>{description}</Text>
      </View>
    </Wrapper>
  );
};

export default GroupItem;
