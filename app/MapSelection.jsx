import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import HireModal from '../components/HireModal'; // HireModal bileşenini içe aktarın


const MapSelection = ({ marker }) => {
  const [selectedCoordinate, setSelectedCoordinate] = useState(null);
  const [hireModalVisible, setHireModalVisible] = useState(false);
  marker={marker}
  console.log(marker)
  
  const handleMapPress = (event) => {
    setSelectedCoordinate(event.nativeEvent.coordinate);
  };

  const handleConfirmSelection = () => {
    if (selectedCoordinate) {
      if (isInsideIstanbul(selectedCoordinate)) {
        setHireModalVisible(true); // HireModal'ı görünür yap
      } else {
        alert("Seçilen yer İstanbul sınırları içinde değil.");
      }
    }
  };

  const isInsideIstanbul = (coordinate) => {
    // İstanbul sınırlarını belirleyen koordinat aralığı
    const istanbulBounds = {
      north: 41.2354,
      south: 40.8027,
      east: 29.3594,
      west: 28.6470,
    };
    // Koordinat, İstanbul sınırları içinde mi kontrol edilir
    return (
      coordinate.latitude >= istanbulBounds.south &&
      coordinate.latitude <= istanbulBounds.north &&
      coordinate.longitude >= istanbulBounds.west &&
      coordinate.longitude <= istanbulBounds.east
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 41.0286,
          longitude: 28.8760,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        style={styles.map}
        onPress={handleMapPress}
      >
        {selectedCoordinate && (
          <Marker
            coordinate={selectedCoordinate}
            pinColor="blue"
          />
        )}
      </MapView>
      <TouchableOpacity style={styles.button} onPress={handleConfirmSelection}>
        <Text style={styles.buttonText}>Confirm Selection</Text>
      </TouchableOpacity>
      {/* HireModal bileşenini göstermek için */}
      {hireModalVisible && (
        <HireModal
          visible={hireModalVisible}
          onClose={() => setHireModalVisible(false)}
          marker={marker}
          selectedCoordinate={selectedCoordinate}
        />
      )}
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
  button: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MapSelection;
