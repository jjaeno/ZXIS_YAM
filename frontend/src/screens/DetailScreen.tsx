import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../types';   // 동일

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export default function DetailScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📄 Detail Screen</Text>
      <Button title="Go Back" onPress={navigation.goBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 20},
});
