import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
const { width } = Dimensions.get('window');
const Header = ({ setSearch }) => {
  const [modalVisible1, setModalVisible1] = useState(false);
  return (
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
            style={{ alignSelf: 'center', right: 10 }}
            onPress={() => setModalVisible1(!modalVisible1)}
          />
          <TextInput
            placeholder="Search..."
            placeholderTextColor={'grey'}
            style={{
              width: width / 1.5,
              height: width / 8,
              borderColor: 'grey',
              borderWidth: 0.5,
              borderRadius: 10,
            }}
          />
          <AntDesign
            name="search1"
            size={25}
            color={'#ffffff'}
            onPress={() => setSearch(true)}
            style={{ alignSelf: 'center', left: 10 }}
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
          onPress={() => setModalVisible1(false)}
          activeOpacity={1}
          style={{ backgroundColor: 'transparent', flex: 1 }}>
          <View
            style={{
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
            }}>
            <TouchableOpacity onPress={() => alert('New group')}>
              <View
                style={{
                  marginVertical: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  //   alignItems:'center'
                }}>
                <Text style={style.modaltxt}>Participants</Text>
                <TextInput
                  style={{
                    borderWidth: 0.5,
                    borderColor: 'black',
                    width: width / 4,
                    borderRadius: 10,
                  }}
                />
              </View>
            </TouchableOpacity>
            <View style={style.theline}></View>
            <TouchableOpacity onPress={() => alert('New broadcast')}>
              <View
                style={{
                  marginVertical: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <Text style={style.modaltxt}>Price</Text>
                <TextInput
                  style={{
                    borderWidth: 0.5,
                    borderColor: 'black',
                    width: width / 4,
                    borderRadius: 10,
                    left: 15,
                  }}
                />
              </View>
            </TouchableOpacity>
            <View style={style.theline}></View>
            <TouchableOpacity onPress={() => alert('Linked devices')}>
              <View
                style={{
                  marginVertical: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <Text style={style.modaltxt}>min Price</Text>
                <TextInput
                  style={{
                    borderWidth: 0.5,
                    borderColor: 'black',
                    width: width / 4,
                    borderRadius: 10,
                    left: 5,
                  }}
                />
              </View>
            </TouchableOpacity>
            <View style={style.theline}></View>
            <TouchableOpacity onPress={() => alert('Linked devices')}>
              <View
                style={{
                  marginVertical: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <Text style={style.modaltxt}>max Price</Text>
                <TextInput
                  style={{
                    borderWidth: 0.5,
                    borderColor: 'black',
                    width: width / 4,
                    borderRadius: 10,
                    left: 5,
                  }}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert('Linked devices')}>
              <View
                style={{
                  marginVertical: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <Text style={style.modaltxt}>Type</Text>
                <TextInput
                  style={{
                    borderWidth: 0.5,
                    borderColor: 'black',
                    width: width / 4,
                    borderRadius: 10,
                    left: 15,
                  }}
                />
              </View>
            </TouchableOpacity>
            <View
              style={{
                width: width / 2,
                height: width / 9,
                backgroundColor: '#363A5A',
                alignSelf: 'center',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  alignSelf: 'center',
                  paddingVertical: width / 55,
                }}>
                Search
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const style = StyleSheet.create({
  modaltxt: {
    color: 'black',
    paddingVertical: 5,
    fontSize: 17,
    left: 15,
    fontWeight: 'bold',
  },
  theline: {
    width: width / 1.2,
    backgroundColor: 'grey',
    height: width / 295,
    alignSelf: 'center',
  },
});

export default Header;
