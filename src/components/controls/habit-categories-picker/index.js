import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import CategoryItem from './category-item';
import {useStyles} from 'theme/hooks';
import Loader from './Loader';
import Text from 'components/base/text';
import styles from './styles';
import classNames from 'utils/classNames';
import useHabitCategories from 'hooks/use-habit-categories';
import CircleButton from 'components/buttons/circle-button';
import useToggle from 'hooks/use-toggle';
import AddCategoryForm from './add-category-form';

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
  const [openAdd, toggleAdd] = useToggle(false);
  // const {loading, data = []} = useGet('habitCategories.list');
  const {loading, habitCategories: data = []} = useHabitCategories();
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
    <>
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
        <View style={classes.actionsWrapper}>
          <CircleButton onPress={toggleAdd} icon="plus" size="sm" />
        </View>
      </View>
      {openAdd && <AddCategoryForm open onClose={toggleAdd} />}
    </>
  );
};

export default HabitCategoriesPicker;
