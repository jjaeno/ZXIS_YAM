import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>YAM</Text>

      <TouchableOpacity style={[styles.button, styles.kakao]}>
        <Text style={styles.buttonText}>카카오로 회원가입</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.naver]}>
        <Text style={styles.buttonText}>네이버로 회원가입</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.google]}>
        <Text style={styles.buttonText}>구글로 회원가입</Text>
      </TouchableOpacity>

    
    </View>
  );
};

export default App;

const styles = StyleSheet.create<{
  container: StyleProp<ViewStyle>;
  title: StyleProp<TextStyle>;
  button: StyleProp<ViewStyle>;
  kakao: StyleProp<ViewStyle>;
  naver: StyleProp<ViewStyle>;
  google: StyleProp<ViewStyle>;
  buttonText: StyleProp<TextStyle>;

}>({
  container: {
    flex: 1,
    backgroundColor: '#0047A0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 60,
  },
  button: {
    width: '80%',
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  kakao: {
    backgroundColor: '#FEE500',
  },
  naver: {
    backgroundColor: '#03C75A',
  },
  google: {
    backgroundColor: '#DADCE0',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
 
});
