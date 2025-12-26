import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AboutiOS = () => {
  return (
    <View style={styles.container}>
      <Text>isOS About screen</Text>
    </View>
  );
};

export default AboutiOS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
