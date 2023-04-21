import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  FlatList,
  StyleSheet,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Index from '../../navigation/Index';

const History = () => {
  const data = useSelector(state => state.MyReducer.myalldata);

  // console.log('data--', data);

  const itemData = ({item, index}) => {
    // console.log('--iiii', item);
    return (
      <View style={style.mainBox} key={index}>
        <Text style={style.mainBoxTxt}>
          <Text style={{fontWeight: '800'}}>Activity : </Text>
          {item.alldata.activity}
        </Text>
        <Text style={style.mainBoxTxt}>
          <Text style={{fontWeight: '800'}}>Participants : </Text>
          {item.alldata.participants}
        </Text>
        <Text style={style.mainBoxTxt}>
          <Text style={{fontWeight: '800'}}>Type : </Text>
          {item.alldata.type}
        </Text>
        <Text style={style.mainBoxTxt}>
          <Text style={{fontWeight: '800'}}>Price : </Text>
          {item.alldata.price}
        </Text>
        <Text style={style.mainBoxTxt}>
          <Text style={{fontWeight: '800'}}>Accessibility : </Text>
          {item.alldata.accessibility}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View
        style={{
          width: width,
          height: width / 5,
          backgroundColor: '#363A5A',

          paddingVertical: 20,

          //   justifyContent: 'space-between',
        }}>
        <View></View>
        <Text
          style={{
            color: '#ffffff',

            fontSize: 20,
            alignSelf: 'center',
            fontWeight: 'bold',
          }}>
          HISTORY
        </Text>
        <View style={{}}></View>
      </View>

      <FlatList
        contentContainerStyle={{paddingBottom: width / 4}}
        data={data}
        renderItem={itemData}
        keyExtractor={(item, index) => `${item.alldata.key}${index}`}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  mainBox: {
    backgroundColor: '#363A5A',
    margin: width / 30,
    borderRadius: 5,
    padding: width / 25,
  },
  mainBoxTxt: {
    color: '#fff',
  },
});

export default History;
