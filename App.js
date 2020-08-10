import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Player from'./player/Player';

export default function App() {
  return (
      <Player />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
