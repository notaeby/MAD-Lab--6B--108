import React, { useState } from 'react';
import { StyleSheet, View, Button, ImageBackground,FlatList, Switch, Text, Pressable } from 'react-native';
import DatePicker from 'react-native-neat-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';


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

  const [selecteddate , setselecteddate] = useState(null); 

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

  const [isEnabled4, setIsEnabled4] = useState(false);
  const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);


  const getData = async (selecteddate) => {
    try {
      const jsonValue = await AsyncStorage.getItem(selecteddate)
      return jsonValue != null ? JSON.parse(jsonValue) : "Data Not Found";
    } catch(e) {
      console.log(e);
    }
  };
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(selecteddate, jsonValue)
      console.log("You saved the data with date ",selecteddate," with data ",jsonValue); 
    } catch (e) {
      console.log(e);
    }
  };

  const fetchData = async (selecteddate) => {
    try {
      const jsonValue = await AsyncStorage.getItem(selecteddate)
       if (jsonValue != null) {
        const parseValue = JSON.parse(jsonValue);
        setIsEnabled(parseValue[0]["Fajar"]);
        setIsEnabled1(parseValue[0]["Zuhar"]);
        setIsEnabled2(parseValue[0]["Asr"]);
        setIsEnabled3(parseValue[0]["Maghrib"]);
        setIsEnabled4(parseValue[0]["Esha"]);
      }
      else{
        setIsEnabled(false);
        setIsEnabled1(false);
        setIsEnabled2(false);
        setIsEnabled3(false);
        setIsEnabled4(false);
      }
      console.log("You Fetch the data with date ",selecteddate," with data ",jsonValue); 
      return jsonValue != null ? JSON.parse(jsonValue) : "Data Not Found";
    } catch(e) {
      console.log(e);
    }
  };


  const SaveData = () => {
    const Data = [
      {
        "Fajar":isEnabled,
        "Zuhar":isEnabled1,
        "Asr":isEnabled2,
        "Maghrib":isEnabled3,
        "Esha":isEnabled4
      }
    ];
    storeData(Data);
  };
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
    console.log(output.date);
    console.log(output.dateString);
    setselecteddate(output.dateString);
    fetchData(output.dateString);
  }
const SwitchButton = () => {
  
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
const SwitchButton1 = () => {
  
return <View >
  <Text style={styles.switchText}>{isEnabled1 ? 'Prayer Offered' : 'Prayer Not Offered'}</Text>
  <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled1 ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch1}
        value={isEnabled1}
  />
  </View>
}
const SwitchButton2 = () => {
 
return <View >
  <Text style={styles.switchText}>{isEnabled2 ? 'Prayer Offered' : 'Prayer Not Offered'}</Text>
  <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch2}
        value={isEnabled2}
  />
  </View>
}
const SwitchButton3 = () => {
 
return <View >
  <Text style={styles.switchText}>{isEnabled3 ? 'Prayer Offered' : 'Prayer Not Offered'}</Text>
  <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled3 ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch3}
        value={isEnabled3}
  />
  </View>
}
const SwitchButton4 = () => {
 
return <View >
  <Text style={styles.switchText}>{isEnabled4 ? 'Prayer Offered' : 'Prayer Not Offered'}</Text>
  <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled4 ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch4}
        value={isEnabled4}
  />
  </View>
}

// const submitData = function () {
//   data = [
//     { x: "Fajr", y: 0 },
//     { x: "Zuhr", y: 0 },
//     { x: "Asr", y: 0 },
//     { x: "Maghrib", y: 0 },
//     { x: "Esha", y: 0 },
//   ];

//   data[0].y = isEnabled ? 1 : 0;
//   data[1].y = isEnabled1 ? 1 : 0;
//   data[2].y = isEnabled2 ? 1 : 0;
//   data[3].y = isEnabled3 ? 1 : 0;
//   data[4].y = isEnabled4 ? 1 : 0;

//   // storing the data
//   storeData(date, data);
// };
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
        // onValueChange={(date)=>console.log(date)}
        onValueChange={(date)=>{
          setData('date', date);
          this.setState({pickedDate: date});
        }}
      />
      <View style={styles.flatlist}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View>

      <View style={styles.switch}> <SwitchButton /> </View>
      <View style={styles.switch1}> <SwitchButton1 /> </View>
      <View style={styles.switch2}> <SwitchButton2 /> </View>
      <View style={styles.switch3}> <SwitchButton3 /> </View>
      <View style={styles.switch4}> <SwitchButton4 /> </View>
      
      <View style={{
          justifyContent: "center",
          flexDirection: "row-reverse",
          height: 5,
        }}>
      <Pressable style={styles.submitButton} onPress={() => SaveData()}>
          <Text style={styles.submitText}>Submit</Text>
      </Pressable>
      </View>


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
    // width: '100%',
    // flexDirection: 'row',
    // justifyContent:'center',

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
  },
  submitButton: {
    marginTop: 60,
    backgroundColor: "#d6bae6",
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  
    borderColor: "blue",
  },
  submitText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
 

})