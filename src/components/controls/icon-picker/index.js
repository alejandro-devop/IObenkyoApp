import React, {useState, useMemo} from 'react';
import TextField from 'components/controls/text-field';
import {TouchableOpacity, View} from 'react-native';
import useToggle from 'hooks/use-toggle';
import Dialog from 'components/dialogs/dialog';
import {useStyles} from 'theme/hooks';
import styles from './styles';
import iconList from './icon-list';
import Icon from 'components/base/icon';
import ScrollView from 'components/commons/scrollview';
import {isEmpty} from 'utils';

const IconPicker = ({
  label,
  placeholder,
  onChange,
  name,
  secondary,
  initialPageSize = 100,
  value,
}) => {
  const classes = useStyles(styles);
  const [query, setQuery] = useState('');
  const [pageSize] = useState(initialPageSize);
  const [currPage, setCurrPage] = useState(1);
  const [openDialog, toggleDialog] = useToggle(false);
  const handleChange = ({target: {value: newValue}}) => {
    setQuery(newValue);
  };
  const iconsToRender = useMemo(() => {
    let icons = [...iconList];
    if (!isEmpty(query)) {
      icons = icons.filter((item) => {
        const reg = new RegExp(`.*(${query.toLowerCase()}).*`, 'g');
        return item.match(reg);
      });
    }
    icons = icons.slice(0, pageSize * currPage);
    return icons;
  }, [query, currPage, pageSize]);

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const handleSelect = (selectedIcon) => {
    if (onChange) {
      onChange({
        target: {
          name,
          value: selectedIcon,
        },
      });
    }
    toggleDialog();
  };

  const reachBottom = () => {
    if (pageSize * currPage <= iconList.length) {
      setCurrPage(currPage + 1);
    }
  };

  return (
    <>
      <TextField
        label={label}
        placeholder={placeholder}
        onlyMask
        secondary={secondary}
        onPress={toggleDialog}
        value={value}
      />
      {openDialog && (
        <Dialog
          contentStyles={classes.iconsDialog}
          open={openDialog}
          disableScroll
          onClose={toggleDialog}
          title={placeholder}>
          <View style={classes.filterWrapper}>
            <TextField
              onChange={handleChange}
              value={query}
              secondary={secondary}
              placeholder="Search icons"
            />
          </View>
          <ScrollView
            onScroll={({nativeEvent}) => {
              if (isCloseToBottom(nativeEvent)) {
                reachBottom();
              }
            }}
            scrollEventThrottle={400}>
            <View style={classes.iconsWrapper}>
              {iconsToRender.map((icon, key) => (
                <TouchableOpacity
                  style={classes.iconWrapper}
                  onPress={() => handleSelect(icon)}>
                  <Icon
                    name={icon}
                    key={`icon-picker-${icon}-${key}`}
                    style={classes.icon}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </Dialog>
      )}
    </>
  );
};

export default IconPicker;
