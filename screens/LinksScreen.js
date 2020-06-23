import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import color from './../config/color';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.openIcon}></View>
      <Image style={styles.image} resizeMode="contain" source={require('./../assets/images/chair.jpg')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  image: {
    width: '100%',
    height: '100%'
  },
  closeIcon: {
    backgroundColor: color.primary,
    width: 50,
    height: 50,
    position: 'absolute',
    top: 20,
    left: 30
  },
  openIcon: {
    backgroundColor: color.secondary,
    width: 50,
    height: 50,
    position: 'absolute',
    top: 20,
    right: 30
  }
});
