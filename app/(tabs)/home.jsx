import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Image } from 'react-native';
import { icons } from '../../constants'; // constants dosyasından resimleri içe aktarın
import CustomModal from '../../components/ChosonCarModal'; // CustomModal bileşenini içe aktarın

const App = () => {
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Örnek işaretler dizisi
  const initialMarkers = [
    {
      id: 1,
      carType: 'mercedes',
      mileage: 32,
      xCoordinate: 41.1286,
      yCoordinate: 28.8760,
      statue: 3,
      previousDriver: 423,
      amountOfFuel: 32,
      lastServiceDate: '2023-03-04',
      isRented: false,
    },
    {
      id: 1,
      carType: 'mercedes',
      mileage: 32,
      xCoordinate: 41.0286,
      yCoordinate: 28.8760,
      statue: 2,
      previousDriver: 423,
      amountOfFuel: 32,
      lastServiceDate: '2023-03-04',
      isRented: false,
    },
    {
      id: 1,
      carType: 'mercedes',
      mileage: 32,
      xCoordinate: 41.0286,
      yCoordinate: 28.9760,
      statue: 1,
      previousDriver: 423,
      amountOfFuel: 32,
      lastServiceDate: '2023-03-04',
      isRented: false,
    },
    // Diğer işaretler buraya eklenebilir
  ];

  useEffect(() => {
    // Backend'den işaretlerin alınması simülasyonu
    setMarkers(initialMarkers);
  }, []);

  const getMarkerIcon = (statue) => {
    switch (statue) {
      case 1:
        return icons.blackCar;
      case 2:
        return icons.orangeCar;
      case 3:
        return icons.pinkCar;
      default:
        return icons.car;
    }
  };

  const handleMarkerPress = (marker) => {
    setSelectedMarker(marker);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 41.0286,
          longitude: 28.8760,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {markers.map(marker => (
          <Marker
            key={marker.id}
            title={marker.carType}
            description={`Mileage: ${marker.mileage}, 
                          Previous Driver: ${marker.previousDriver}, 
                          Amount of Fuel: ${marker.amountOfFuel}, 
                          Last Service Date: ${marker.lastServiceDate}, 
                          Is Rented: ${marker.isRented}`}
            coordinate={{
              latitude: marker.xCoordinate,
              longitude: marker.yCoordinate,
            }}
            onPress={() => handleMarkerPress(marker)}
          >
             <Image
               source={getMarkerIcon(marker.statue)}
               style={{ width: 32, height: 32 }}
            />
          </Marker>
        ))}
      </MapView>
      {/* CustomModal bileşenini çağırın */}
      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        marker={selectedMarker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default App;
