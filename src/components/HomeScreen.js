import {
  FlatList,
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {themeColors} from '../theme/themeColors';
import {categories, coffeeItems} from '../common';
import Carousel from 'react-native-snap-carousel';
import CoffeeCard from './coffeeCard';
const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <ScrollView
      className="flex-1 relative bg-white"
      showsVerticalScrollIndicator={false}>
      <StatusBar />
      <Image
        source={require('../assets/images/beansBackground1.png')}
        className="w-full h-[170px] absolute -top-5 opacity-10"
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
            <Text className="text-base font-semibold text-black">
              New York, NYC
            </Text>
          </View>
          <Icon name="bell" size={27} color={themeColors.bgLight} />
        </View>

        {/* {search bar} */}
        <View className="mx-5 mt-8">
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
        {/* {categories} */}
        <View className="px-5 mt-3">
          <FlatList
            horizontal
            data={categories}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            className="overflow-visible"
            renderItem={({item}) => {
              let isActive = item.id == activeCategory;
              let activeTextClass = isActive ? 'text-white' : 'text-gray-700';
              return (
                <TouchableOpacity
                  style={{
                    backgroundColor: isActive
                      ? themeColors.bgLight
                      : 'rgba(0,0,0,0.07)',
                  }}
                  className="p-4 px-5 rounded-full mr-2 shadow"
                  onPress={() => setActiveCategory(item.id)}>
                  <Text className={'font-semibold ' + activeTextClass}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/* {coffee cards} */}
        <View className="mt-3 py-2">
          <Carousel
            containerCustomStyle={{overflow: 'visible'}}
            data={coffeeItems}
            loop
            renderItem={({item}) => <CoffeeCard item={item} />}
            firstItem={1}
            inactiveSlideOpacity={0.75}
            inactiveSlideScale={0.77}
            sliderWidth={365}
            itemWidth={260}
            slideStyle={{display: 'flex', alignItems: 'center'}}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
