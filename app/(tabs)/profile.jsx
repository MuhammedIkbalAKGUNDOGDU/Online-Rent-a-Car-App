import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const [userData, setUserData] = useState(null); // State to hold user data

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const telNumber = await getMarkerFromStorage();
        console.log(telNumber)
        const response = await fetch(`http://192.168.1.4:8080/api/userInfo/${telNumber}`);
        const responseData = await response.json();
        if (responseData.isSuccess) {
          setUserData({  
            name: responseData.data.name,
            surname: responseData.data.surname,
            telNumber: responseData.data.telNumber,
            money: responseData.data.money,
            drivingPoint: responseData.data.drivingPoint,
            drivingLicense: responseData.data.drivingLicense
          });
          console.log("asd"+userData.name)
          console.log("as32d"+responseData.data.name)
        } else {
          console.error('Error fetching user data:', responseData.message);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const getMarkerFromStorage = async () => {
    try {
      const marker = await AsyncStorage.getItem('phoneNumber');
      if (marker !== null) {
        console.log('phoneNumber:', JSON.parse(marker));
        return JSON.parse(marker);
      } else {
        console.log('Marker bulunamadı.');
        return null;
      }
    } catch (error) {
      console.error('Hata:', error);
      return null;
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView  contentContainerStyle={{ height: '100%' }}>
    <View className="w-full justify-top  min-h-[85vh] px-4 my-6"  style={{ flex: 1, alignItems: 'center' }}>
    {userData ? ( // Check if userData is available
      <>
        <Text className="text-2xl text-secondary-100"> Name:   {userData.name}</Text>
        <Text className="text-2xl text-secondary-100"> Last Name:   {userData.surname}</Text>
        <Text className="text-2xl text-secondary-100"> Driving License:   {userData.drivingLicense}</Text>
        <Text className="text-2xl text-secondary-100"> Driving Point:   {userData.drivingPoint}</Text>
        <Text className="text-2xl text-secondary-100"> Money:   {userData.money} $</Text>
      </>
    ) : (
      <Text>Loading...</Text>
    )}
    
  </View>
  </ScrollView>
  </SafeAreaView>
  );
};

export default ProfileScreen;
