import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { multiply } from 'react-native-rinerf3';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(132, 78).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text} >Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#000000'
  },
  text: {
   color:'#FFFFFF',
   fontSize:18
  },
});
