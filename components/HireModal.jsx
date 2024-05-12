import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import CustomButton from './CustomButton';
import { router } from 'expo-router';
import { Route } from 'expo-router/build/Route';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HireModal = ({ visible, onClose, marker }) => {
  const [startTime, setStartTime] = useState(null); // Hire modalının açıldığı zamanı tutmak için bir state
  const [elapsedTime, setElapsedTime] = useState(0); // Geçen zamanı tutmak için bir state
  const [mileage, setMileage] = useState(0); // Mileage değerini tutmak için bir state
  

const saveMarkerToStorage = async (marker1) => {
  try {
    await AsyncStorage.setItem('marker', JSON.stringify(marker1));
    console.log('Marker kaydedildi:', marker1);
  } catch (error) {
    console.error('1234 Hata:', error);
  }
};
  useEffect(() => {
    if (marker) {
      setMileage(marker.mileage); // Marker değiştiğinde mileage değerini güncelle
    }
  }, [marker]);

  useEffect(() => {
    if (visible) {
      setStartTime(Date.now()); // Hire modalı açıldığında başlangıç zamanını belirle
    } else {
      setStartTime(null); // Hire modalı kapatıldığında başlangıç zamanını sıfırla
    }
  }, [visible]);

  useEffect(() => {
    let timer;
    if (startTime) {
      // Başlangıç zamanı varsa, geçen zamanı hesapla ve 1 saniye aralıklarla güncelle
      timer = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTimeInSeconds = Math.floor((currentTime - startTime) / 1000);
        setElapsedTime(elapsedTimeInSeconds);

      }, 1000);
    }
    return () => clearInterval(timer); // Komponent kaldırıldığında timer'ı temizle
  }, [startTime]);

  // Süreyi saat, dakika ve saniye cinsine dönüştür
  const hours = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = elapsedTime % 60;

  // Mileage değerini güncellemek için bir fonksiyon
  const updateMileage = (newMileage) => {
    setMileage(newMileage+1);
    console.log("")
    console.log(marker)
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        activeOpacity={1}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        onPress={onClose}
      >
        <View className="bg-primary" style={{ padding: 20, borderRadius: 10 }}>
          <Text></Text>
          <Text className="text-2xl text-secondary mb-10 p-10">{hours.toString().padStart(2, '0')} : {minutes.toString().padStart(2, '0')} : {seconds.toString().padStart(2, '0')} </Text>
          <Text>Mileage: {mileage}</Text> 
          <CustomButton
            title="Finish Hire"
            handlePress={() => {
              marker.mileage = ~~(mileage + elapsedTime / 5);
              console.log("marker.mileage burada hire modaldayız ste")
              console.log(marker.mileage)
              saveMarkerToStorage(marker)
              onClose();
              router.push("/MapSelection",marker)

            }}
            containerStyles={{ marginTop: 10 }}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default HireModal;
