import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  FlatList,
  StyleSheet,
  Alert,
  Modal,
  ActivityIndicator,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import React, {useState, useEffect} from 'react';
import {Get_Data, Search_Api} from '../../store/actions/GetApi';
import {useDispatch} from 'react-redux';
const {height, width} = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {All_Data} from '../../store/actions/AuthAction';
import Header from '../../components/Header';
import {filter_Data} from '../../store/actions/GetApi';

const Home = () => {
  const [modalVisible1, setModalVisible1] = useState(false);
  const [data, setdata] = useState('');
  const [searchTxt, setsearchTxt] = useState('');
  const dispatch = useDispatch();

  const [participants, setparticipants] = useState('');
  const [price, setprice] = useState('');
  const [minPrice, setminPrice] = useState('');
  const [maxPrice, setmaxPrice] = useState('');
  const [type, settype] = useState('');
  const [loading, setLoading] = useState(false);
  //(participants, price, minPrice, maxPrice, type)
  const searchData = () => {
    if (searchTxt) {
      setLoading(true);
      dispatch(
        filter_Data(
          participants,
          price,
          minPrice,
          maxPrice,
          searchTxt.toLocaleLowerCase().trim(),
        ),
      ).then(res => {
        if (res.error) {
          setdata('');
          setsearchTxt('');
          setLoading(false);
        } else {
          setdata(res);
          dispatch(All_Data(res));
          setsearchTxt('');
          setLoading(false);
        }
      });
    } else {
      Alert.alert('TestPro', 'please enter something in search');
    }
  };

  const clearFilter = () => {
    setparticipants('');
    setprice('');
    setminPrice('');
    setmaxPrice('');
    setModalVisible1(false);
  };

  const filter_searchData = () => {
    setModalVisible1(false);
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          width: width,
          height: width / 3,
          backgroundColor: '#363A5A',
          paddingVertical: 20,
        }}>
        <View></View>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 20,
            marginLeft: width / 15,
            fontWeight: 'bold',
          }}>
          BORED PRO
        </Text>
        <View style={{}}>
          <View
            style={{
              flexDirection: 'row',
              width: width / 5,
              justifyContent: 'space-between',
              marginHorizontal: width / 11,
              marginTop: 10,
            }}>
            <Foundation
              name="filter"
              size={26}
              color={'white'}
              style={{alignSelf: 'center', right: 10}}
              onPress={() => setModalVisible1(!modalVisible1)}
            />
            <TextInput
              value={searchTxt}
              placeholder="search type..."
              onChangeText={txt => setsearchTxt(txt)}
              placeholderTextColor={'grey'}
              style={{
                width: width / 1.5,
                height: width / 8,
                borderColor: 'grey',
                borderWidth: 0.5,
                borderRadius: 10,
                color: 'white',
                paddingLeft: 10,
              }}
            />
            <AntDesign
              name="search1"
              size={25}
              color={'#ffffff'}
              onPress={() => searchData()}
              style={{alignSelf: 'center', left: 10}}
            />
          </View>
        </View>
        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {
            setModalVisible1(!modalVisible1);
          }}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              backgroundColor: 'transparent',
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.5)'
            }}
            onPress={() => setModalVisible1(false)}>
            <View style={style.mainBoxFilter}>
              <View style={style.filterTitle}>
                <Text style={style.modaltxt}>Participants</Text>
                <TextInput
                  style={style.inputStyle}
                  value={participants}
                  onChangeText={txt => setparticipants(txt)}
                  keyboardType="numeric"
                />
              </View>

              <View style={style.theline}></View>

              <View style={style.filterTitle}>
                <Text style={style.modaltxt}>Price</Text>
                <TextInput
                  style={style.inputStyle}
                  keyboardType="numeric"
                  value={price}
                  onChangeText={txt => setprice(txt)}
                />
              </View>

              <View style={style.theline}></View>

              <View style={style.filterTitle}>
                <Text style={style.modaltxt}>Min Price</Text>
                <TextInput
                  style={style.inputStyle}
                  keyboardType="numeric"
                  value={minPrice}
                  onChangeText={txt => setminPrice(txt)}
                />
              </View>

              <View style={style.theline}></View>

              <View style={style.filterTitle}>
                <Text style={style.modaltxt}>Max Price</Text>
                <TextInput
                  style={style.inputStyle}
                  keyboardType="numeric"
                  value={maxPrice}
                  onChangeText={txt => setmaxPrice(txt)}
                />
              </View>
              <View style={style.theline} />

              <TouchableOpacity
                style={{
                  width: width / 2,
                  height: width / 9,
                  backgroundColor: '#363A5A',
                  alignSelf: 'center',
                  borderRadius: 10,
                  marginTop: 20,
                }}
                onPress={() => filter_searchData()}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 17,
                    alignSelf: 'center',
                    paddingVertical: width / 55,
                  }}>
                  Apply Filter
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: width / 2,
                  height: width / 9,

                  alignSelf: 'center',
                  borderRadius: 10,
                  marginTop: 20,
                }}
                onPress={() => clearFilter()}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 17,
                    alignSelf: 'center',
                    paddingVertical: width / 55,
                    textDecorationLine: 'underline',
                  }}>
                  Clear Filter
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
      {loading ? (
        <View style={style.mainBox}>
          <ActivityIndicator color="#ffffff" />
        </View>
      ) : data ? (
        <View style={style.mainBox}>
          <Text style={style.mainBoxTxt}>
            <Text style={{fontWeight: '800'}}>Activity : </Text>
            {data.activity}
          </Text>
          <Text style={style.mainBoxTxt}>
            <Text style={{fontWeight: '800'}}>Participants : </Text>
            {data.participants}
          </Text>
          <Text style={style.mainBoxTxt}>
            <Text style={{fontWeight: '800'}}>Type : </Text>
            {data.type}
          </Text>
          <Text style={style.mainBoxTxt}>
            <Text style={{fontWeight: '800'}}>Price : </Text>
            {data.price}
          </Text>
          <Text style={style.mainBoxTxt}>
            <Text style={{fontWeight: '800'}}>Accessibility : </Text>
            {data.accessibility}
          </Text>
        </View>
      ) : (
        <View style={style.mainBox}>
          <Text style={[style.mainBoxTxt, {fontWeight: '800'}]}>
            No data available
          </Text>
        </View>
      )}
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
    color: '#ffffff',
    fontSize: 15,
  },
  modaltxt: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    width: '25%',
  },
  theline: {
    width: width / 1.2,
    backgroundColor: '#b8b9bb',
    height: width / 295,
    alignSelf: 'center',
    opacity: 0.4,
  },
  filterTitle: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mainBoxFilter: {
    backgroundColor: 'white',
    position: 'absolute',
    width: width / 1.06,
    borderRadius: 3,
    marginVertical: width / 6,
    elevation: 5,
    paddingVertical: 18,
    justifyContent: 'space-around',
    right: 5,
    marginHorizontal: width / 65,
  },
  inputStyle: {
    height:40,
    borderWidth: 0.5,
    borderColor: 'black',
    width: '50%',
    borderRadius: 10,
    color: '#000',
    padding:5
  },
});

export default Home;
