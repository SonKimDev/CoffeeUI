import {
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {themeColors} from '../theme/themeColors';
const HomeScreen = () => {
  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />
      <Image
        source={require('../assets/images/beansBackground1.png')}
        className="w-full h-[220px] absolute -top-5 opacity-10"
      />
      <SafeAreaView className={'flex-1 pt-2'}>
        {/* {avatar and bell icon} */}
        <View className={'px-4 flex-row justify-between items-center'}>
          <Image
            source={require('../assets/images/avatar.png')}
            className="w-9 h-9 rounded-full"
          />
          <View className="flex-row items-center space-x-2">
            <Icon name="map-marker" size={25} color={themeColors.bgLight} />
            <Text className="text-base font-semibold text-black">Hanoi</Text>
          </View>
          <Icon name="bell" size={27} color={themeColors.bgLight} />
        </View>

        {/* {search bar} */}
        <View className="mx-5 mt-14">
          <View className="flex-row justify-center items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput
              placeholder="Search"
              className="p-4 flex-1 font-semibold text-gray-700"
            />
            <TouchableOpacity
              className="rounded-full p-3"
              style={{backgroundColor: themeColors.bgLight}}>
              <Icon name="search" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
