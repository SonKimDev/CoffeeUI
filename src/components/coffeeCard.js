import {
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {themeColors} from '../theme/themeColors';
import Icon from 'react-native-vector-icons/FontAwesome';

const coffeeCard = ({item}) => {
  return (
    <View
      style={{
        borderRadius: 40,
        backgroundColor: themeColors.bgDark,
        height: 350,
        width: 250,
      }}>
      <View
        style={{
          ...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowRadius: 30,
              shadowOffset: {
                width: 0,
                height: 40,
              },
              shadowOpacity: 0.8,
            },
            android: {
              elevation: 8,
            },
          }),
        }}
        className="flex-row justify-center">
        <Image source={item.image} className="h-32 w-32 mt-3" />
      </View>
      <View className="px-5 space-y-3">
        <Text className="text-2xl text-white font-semibold z-10">
          {item.name}
        </Text>
        <View
          style={{backgroundColor: 'rgba(255,255,255,0.2)'}}
          className="flex-row items-center rounded-3xl px-2 space-x-1 w-16">
          <Icon name="star" size={15} color={'white'} />
          <Text className="text-base font-semibold text-white">
            {item.stars}
          </Text>
        </View>
        <View className="flex-row space-x-1 z-10">
          <Text className="text-base text-white font-semibold">Volume</Text>
          <Text className="text-base text-white font-semibold">
            {item.volume}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: themeColors.bgDark,
            ...Platform.select({
              ios: {
                shadowColor: themeColors.bgDark,
                shadowRadius: 30,
                shadowOffset: {
                  width: 0,
                  height: 40,
                },
                shadowOpacity: 0.8,
              },
            }),
          }}
          className="flex-row justify-between items-center">
          <Text className="text-white font-bold text-lg">$ {item.price}</Text>
          <TouchableOpacity
            className="p-3 px-4 bg-white rounded-full"
            style={{
              ...Platform.select({
                ios: {
                  shadowColor: 'black',
                  shadowRadius: 30,
                  shadowOffset: {
                    width: 0,
                    height: 40,
                  },
                  shadowOpacity: 0.8,
                },
                android: {
                  elevation: 8,
                },
              }),
            }}>
            <Icon name="plus" size={25} color={themeColors.bgDark} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default coffeeCard;

const styles = StyleSheet.create({});
