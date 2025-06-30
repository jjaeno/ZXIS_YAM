import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, StatusBar} from 'react-native';

function App(): JSX.Element {
  return (
    <>
      {/* 상태바 아이콘 색만 지정 */}
      <StatusBar barStyle="light-content" />

      {/* SafeArea 한 겹만 사용, flex:1 로 전체 채움 */}
      <SafeAreaView style={styles.safe}>
        <View style={styles.centerBox}>
          <Text style={styles.text}>YAM 학식 예약 앱</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#2196F3', // 파란 배경
  },
  centerBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
