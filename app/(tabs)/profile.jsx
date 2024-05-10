import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

const Profile = () => {
  const [userData, setUserData] = useState(null); // Kullanıcı verilerini saklamak için state

  useEffect(() => {
    // Verileri back-end'den al
    fetch('http://example.com/api/userdata')
      .then(response => response.json())
      .then(data => {
        // Verileri state'e kaydet
        setUserData(data);
      })
      .catch(error => console.error('Veri alınırken hata oluştu:', error));
  }, []); // Component yüklendiğinde sadece bir kez çalışır

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ margin : 30,padding: 20 }}>
          {userData ? ( // userData varsa
            <>
              <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{userData.firstName} {userData.lastName}</Text>
              <Text style={{ fontSize: 18, marginTop: 10 }}>Sürüş Puanı: {userData.drivingScore}</Text>
              <Text style={{ fontSize: 18 }}>Parası: {userData.money} $</Text>
              <Text style={{ fontSize: 18 }}>Ehliyet Kartı ID'si: {userData.licenseID}</Text>
            </>
          ) : ( // userData yoksa
            <Text style={{textAlign : 'center',fontWeight: 'bold', fontSize : 24}}>Loading...</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
