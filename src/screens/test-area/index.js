import React from 'react';
import {View} from 'react-native';
import ScrollView from 'components/commons/scrollview';
import styles from './styles';
import {useStyles} from 'theme/hooks';
import MainLayout from 'screens/layouts/main-layout';
import Container from './container';
import Button from 'components/buttons/button';
import Text from 'components/base/text';
import IconButton from 'components/buttons/icon-button';
import AppTabs from 'components/app-tabs';
import FloatingButton from 'components/buttons/floating-button';
import CircleButton from 'components/buttons/circle-button';
import {TextField} from 'components/controls';
import DatePicker from 'components/controls/date-picker';
import NumberPicker from 'components/controls/number-picker';
import useSession from 'pkgs/session/hooks/useSession';
import PasswordField from 'components/controls/password-field';
import Switch from 'components/controls/switch';
import RadioButton from 'components/controls/radio-button';

const TestAreaScreen = () => {
  const classes = useStyles(styles);
  const {
    session: {logged},
  } = useSession();

  return (
    <>
      <MainLayout>
        <ScrollView>
          <Container title="Controls">
            <TextField label="Normal input" />
            <TextField secondary label="Secondary input" />
            <TextField label="Label left" labelLeft />
            <PasswordField label="Password" labelLeft value="some pass" />
            <DatePicker label="Date Picker left" labelLeft />
            <NumberPicker label="Number picker" labelLeft />
            <View>
              <RadioButton secondary label="radio button" />
            </View>
            <View style={classes.row}>
              <Switch label="switch" />
              <Switch label="switch" success />
            </View>
          </Container>
          <Container title="Other buttons">
            <View style={classes.row}>
              <CircleButton icon="check" label="none" />
              <CircleButton icon="check" primary label="primary" />
              <CircleButton icon="check" primary isLoading label="primary" />
              <CircleButton icon="check" success label="success" />
              <CircleButton icon="check" danger label="danger" />
            </View>
            <View style={classes.floatingWrapper}>
              <FloatingButton icon="check" label="floating" />
            </View>
          </Container>
          <Container title="Icon button">
            <Text style={classes.title}>Flags</Text>
            <View style={[classes.row, classes.underline]}>
              <IconButton icon="check" label="none" />
              <IconButton icon="check" isLoading label="isLoading" />
              <IconButton icon="check" secondary label="secondary" />
              <IconButton icon="check" disabled label="disabled" />
            </View>
            <Text style={classes.title}>Sizes</Text>
            <View style={classes.row}>
              <IconButton icon="check" size="sm" label="sm" />
              <IconButton icon="check" size="md" label="md (default)" />
              <IconButton icon="check" size="lg" label="lg" />
            </View>
          </Container>
          <Container title="Typography">
            <Text>Simple text</Text>
            <Text variant="title">Title...</Text>
            <Text variant="subtitle">Subtitle...</Text>
            <Text variant="paragraph">Paragraph...</Text>
            <Text variant="caption">Caption...</Text>
          </Container>
          <Container title="Buttons">
            <View style={classes.row}>
              <Button>Normal</Button>
              <Button secondary>Secondary</Button>
              <Button disabled>Disabled</Button>
              <Button isLoading>Loading</Button>
              <Button isLoading secondary>
                Loading secondary
              </Button>
            </View>
          </Container>
        </ScrollView>
      </MainLayout>
      {/*{!logged && <AppTabs />}*/}
    </>
  );
};

export default TestAreaScreen;
