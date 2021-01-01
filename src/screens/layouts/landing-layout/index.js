import React from 'react';
import {ImageBackground, SafeAreaView, View} from 'react-native';
import BaseLayout from 'screens/layouts/base-layout';
import {useStyles} from 'theme/hooks';
import {ScrollView} from 'components/commons';
import imageBg from 'assets/backgrounds/background.jpg';
import styles from './styles';

/**
 * This component renders a layout specific for the landing view
 * @param children
 * @param statusColor
 * @returns {*}
 * @constructor
 */
const LandingLayout = ({children, statusColor = 'light-content'}) => {
  const classes = useStyles(styles);
  return (
    <BaseLayout statusColor={statusColor}>
      <ImageBackground source={imageBg} style={classes.image}>
        <View style={classes.root}>
          <SafeAreaView style={classes.safe}>
            <ScrollView useKeyboard>{children}</ScrollView>
          </SafeAreaView>
        </View>
      </ImageBackground>
    </BaseLayout>
  );
};

export default LandingLayout;
