import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const HomeScreen = () => {
  return (
    <View style={styles.home}>
      <Link href='https://hng.tech/hire/react-native-developers'>
        <Text style={styles.text}>Hire a developer</Text>
      </Link>
      
        <Text></Text>
      <Link href='https://github.com/CosMo578/HNG-App-Dev-Track'>
        <Text style={styles.text}>Visit Github repo</Text>
      </Link>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  home: {
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    height: '100%',
    gap: 5
  },
  text: {
    textAlign: 'center',
    backgroundColor: 'blue',
    color: 'white',
    paddingVertical: 20,
  },
});
