import React,{useState} from 'react';
import { View, StyleSheet, Text, Dimensions, ImageBackground, Button } from 'react-native';
import { BarChart } from "react-native-chart-kit";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Reports() {

  const TempData = [{ data: [0,0,0,0,0] }];

  const[dataFromDb,setdataFromDb] = useState(TempData);

  const labelsofnamaz = ['Fajr', 'Zahar', 'Asar', 'Maghrib', 'Isha']; 
  
  const datafromstorage = dataFromDb;

  const getCurrentDate=(date)=>{
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return year + '-0' + month + '-' + date;//format: dd-mm-yyyy;
}

  const fetchDataofWeek = async(setData) => {
    const week = [];  
    for (var i = 6; i >= 0; i--) {
      var date = new Date();
      var temp = null;
      temp = getCurrentDate(date.getDate() - i)
      week.push(temp);
    };
   console.log(week);
   var fajarcount = 0;
   var zuharcount = 0;
   var asrcount = 0;
   var maghribcount = 0;
   var eshacount = 0 ;  
   for (var i = 0; i < 7; i++) {
      try {
        const jsonValue = await AsyncStorage.getItem(week[i]);
        if (jsonValue != null) {
          const parseValue = JSON.parse(jsonValue);
          if(parseValue[0]["Fajar"]){fajarcount++};
          if(parseValue[0]["Zuhar"]){zuharcount++};
          if(parseValue[0]["Asr"]){asrcount++};
          if(parseValue[0]["Maghrib"]){maghribcount++};          
          if(parseValue[0]["Esha"]){eshacount++};          
        }
        console.log("You Fetch the data with date ",week[i]," with data ",jsonValue); 
      } catch(e) {
        console.log(e);
      }
    }
    const data = [{data:[fajarcount,zuharcount,asrcount,maghribcount,eshacount]}];
    setdataFromDb(data);
    console.log("Total: ",fajarcount," - ",zuharcount," - ",asrcount," - ",maghribcount," - ",eshacount); 
  };

  return (

    <View style={styleSheet.MainContainer}>
      <ImageBackground
        source={require('../MidTerm/assets/bg2.jpeg')}
        resizeMode='cover'
        style={{ width: '100%', height: '100%', flex: 1, opacity: '0.9', justifyContent: 'center' }}>
        <View style={styleSheet.Button}>
          <Button
            title="Daily"
            color="#f194ff"
          />
          <Button
            title="Weekly"
            color="#f194ff"
            onPress={()=> fetchDataofWeek()}
          />
          <Button
            title="Monthly"
            color="#f194ff"
          />
          <Button
            title="Range"
            color="#f194ff"
          />
        </View>
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'black', textAlign: 'center' }}> Namaz Reports </Text>
        <BarChart
          data={{
            labels: labelsofnamaz,
            datasets: datafromstorage,
          }}
          width={Dimensions.get('window').width}
          height={230}

          chartConfig={{
            backgroundColor: 'black',

            color: (opacity = 225) => '#ECEFF1',
            style: {
              borderRadius: 12, padding: 10
            },
          }}
        />


      </ImageBackground>
    </View>
  );
}

const styleSheet = StyleSheet.create({

  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Button: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

});