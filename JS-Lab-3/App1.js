import * as React from 'react';
import { Text, View, StyleSheet,Button,Alert, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Welcome Back
      </Text>
       <Text style={styles.paragraph1}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quod cumque dolores odio voluptas culpa maxime!
      </Text>

      <View style={styles.fixToText}>
    <Button 
          
          color="pink"
          title="Sign in"
          onPress={() => Alert.alert('Left button pressed')}
        />
        
      </View>
     </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius:'22px',
  },
  paragraph: {
    margin: 0.5,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph1: {
    padding: 16,
    justifyContent:'center',
    textAlign: 'center',
    
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 22,
    marginLeft: 82,
    marginRight: 82, 
  },
  
  
});
