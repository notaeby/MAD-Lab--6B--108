import React, { useState } from 'react';
import { StyleSheet, View, Button, ImageBackground,FlatList, Switch, Text} from 'react-native';
import DatePicker from 'react-native-neat-date-picker';

const DATA = [
  {
    id: '1',
    title: 'Fajr',
  },
  {
    id: '2',
    title: 'Zohar',
  },
  {
    id: '3',
    title: 'Asar',
  },
  {
    id: '4',
    title: 'Maghrib',
  },
  {
    id: '5',
    title: 'Isha',
  },
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const HomeScreen = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  const [showDatePicker, setShowDatePicker] = useState(false)

  const openDatePicker = () => {
    setShowDatePicker(true)
  }

  const onCancel = () => {
   
    setShowDatePicker(false)
    
  }

  const onConfirm = (output) => {
    
    setShowDatePicker(false) 
   
    console.log(output.date)
    console.log(output.dateString)
  }
const SwitchButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
return <View >
  <Text style={styles.switchText}>{isEnabled ? 'Prayer Offered' : 'Prayer Not Offered'}</Text>
  <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
  />
  </View>
}
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../MidTerm/assets/bg.jpg')} 
        resizeMode='cover'
        style={{width:'100%', height:'100%',flex:1, opacity:'0.8', justifyContent:'center'}}> 
       <View style={styles.button}>
        <Button
        color="#f194ff" title={'Select Date'} onPress={openDatePicker} />
        </View>
      <DatePicker
        maxDate={new Date()}
        isVisible={showDatePicker}
        mode={'single'}
        onCancel={onCancel} 
        onConfirm={onConfirm}
      />
      <View style={styles.flatlist}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      
      />
      </View>
      <View style={styles.switch}> <SwitchButton /> </View>
      <View style={styles.switch1}> <SwitchButton /> </View>
      <View style={styles.switch2}> <SwitchButton /> </View>
      <View style={styles.switch3}> <SwitchButton /> </View>
      <View style={styles.switch4}> <SwitchButton /> </View>
    

    </ImageBackground>
    
   </View>
    
    
    
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  button:{
    position: 'absolute',
        top: 140,
        left: 140,
        backgroundColor: 'powderblue'
  },
  flatlist:{
    // position: 'absolute',
    // top: 200,
  },
  item: {
    backgroundColor: '#f5f5dcbf',
    borderWidth: 2,
    borderTopRightRadius: 60 ,
    borderBottomRightRadius: 60 ,
    borderStyle: 'dotted',
    borderColor: '#0a0f14bf',
    padding: 6,
    marginVertical: 8,
    marginHorizontal: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  switch: {
    position: 'absolute',
    top: 225,
    right: 70,
  },
  switch1: {
    position: 'absolute',
    top: 300,
    right: 70,
  },
  switch2: {
    position: 'absolute',
    top: 375,
    right: 70,
  },
  switch3: {
    position: 'absolute',
    top: 450,
    right: 70,
  },
  switch4: {
    position: 'absolute',
    top: 525,
    right: 70,
  },
  switchText: {
    fontWeight: 'bold',
  }

})