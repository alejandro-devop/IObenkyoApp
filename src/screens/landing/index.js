import React from 'react';
import LandingLayout from 'screens/layouts/landing-layout';
import {Card} from 'components/containers';
import Text from 'components/base/text';

const LandingScreen = () => {
  return (
    <LandingLayout>
      <Card>
        <Text>Text</Text>
        <Text variant="title">Text</Text>
        <Text variant="subtitle">Text</Text>
        <Text variant="paragraph">Text</Text>
        <Text variant="caption">Text</Text>
      </Card>
    </LandingLayout>
  );
};

export default LandingScreen;
