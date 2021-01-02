import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import CategoryItem from './category-item';
import {useStyles} from 'theme/hooks';
import Loader from './Loader';
import Text from 'components/base/text';
import styles from './styles';
import classNames from 'utils/classNames';
import {useGet} from 'pkgs/api/hooks';

const HabitCategoriesPicker = ({
  disabled,
  label,
  name,
  onChange,
  secondary,
  value,
}) => {
  const classes = useStyles(styles);
  const [selected, setSelected] = useState(value);
  const {loading, data = []} = useGet('habitCategories.list');
  const handleSelect = ({id}) => {
    setSelected(id);
    if (onChange) {
      onChange({
        target: {
          name,
          value: id,
        },
      });
    }
  };
  return (
    <View style={classes.root}>
      {label && (
        <Text
          style={classNames(
            {label: true, labelSecondary: secondary, labelDisabled: disabled},
            classes,
          )}>
          {label}
        </Text>
      )}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {loading && <Loader />}
        {data.map((item) => (
          <CategoryItem
            item={item}
            key={`category-${item.id}`}
            selected={selected === item.id}
            onPress={() => handleSelect(item)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HabitCategoriesPicker;
