import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import FormField from '../components/FormField'
import CustomButton from '../components/CustomButton';

const homeAdmin = () => {

  const [form, setForm] = useState({
    fuel: "",
    id: "",
  });
  
  const [control, setControl] = useState({
    id: "",
    date: "",
  });

  const [discount, setDiscount] = useState({
    id: "",
    amount: "",
  });

  const [upadtePrice, setUpadtePrice] = useState({
    id: "",
    amount: "",
  });

  const [carAdd, setCarAdd] = useState({
    car_is_rented: "",
    car_kilometer: "",
    car_last_service: "",
    car_previous_driver: "",
    car_price: "",
    car_statue: "",
    car_type: "",
    car_x_coordinate: "",
    car_y_coordinate: "",
  });

  const [deleteCar, setDeleteCar] = useState({
    id: "",
  });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '1000%' }} >
        <View className="w-full justify-top  min-h-[85vh] px-4 my-6">
          <Text>Welcome Admin</Text>

          <FormField
            title="Car ID"
            value={form.phoneNumber}
            handleChangeText={(e) => setForm({ ...form, id: e })}
            otherStyles="mt-7"
            keyboardType="numeric"
          />
          <FormField
            title="Fuel Amount"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, fuel: e })}
            otherStyles="mt-7"
          />
           <CustomButton
            title="Fuel Process"
            handlePress={""} //yapilacak islem
            containerStyles="mt-7"
          />
          
          <FormField
            title="Car ID"
            value={control.id}
            handleChangeText={(e) => setControl({ ...control, id: e })}
            otherStyles="mt-7"
            keyboardType="numeric"
          />
          <FormField
            title="Control Date"
            value={control.date}
            handleChangeText={(e) => setControl({ ...control, date: e })}
            otherStyles="mt-7"
          />
           <CustomButton
            title="Control Process"
            handlePress={""} //yapilacak islem
            containerStyles="mt-7"
          />

          <FormField
            title="Car ID"
            value={discount.id}
            handleChangeText={(e) => setDiscount({ ...discount, id: e })}
            otherStyles="mt-7"
            keyboardType="numeric"
          />
          <FormField
            title="discount amount"
            value={discount.amount}
            handleChangeText={(e) => setDiscount({ ...discount, date: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Discount Process"
            handlePress={""} //yapilacak islem
            containerStyles="mt-7"
          />

          <FormField
            title="Car ID"
            value={upadtePrice.id}
            handleChangeText={(e) => setUpadtePrice({ ...upadtePrice, id: e })}
            otherStyles="mt-7"
            keyboardType="numeric"
          />
          <FormField
            title="Update Price amount"
            value={upadtePrice.amount}
            handleChangeText={(e) => setUpadtePrice({ ...upadtePrice, date: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Update Price Process"
            handlePress={""} //yapilacak islem
            containerStyles="mt-7"
          />



          <FormField // car add -----------------------------------------------------------------------------------------------------------------------
            title="Is Car Rented"
            value={carAdd.car_is_rented}
            handleChangeText={(e) => setUpadtePrice({ ...carAdd, date: e })}
            otherStyles="mt-7"
          />
          <FormField
            title="Car Kiloemeter"
            value={carAdd.car_kilometer}
            handleChangeText={(e) => setCarAdd({ ...carAdd, id: e })}
            otherStyles="mt-7"
            keyboardType="numeric"
          />
          <FormField
            title="Car Last Service"
            value={carAdd.car_last_service}
            handleChangeText={(e) => setCarAdd({ ...carAdd, date: e })}
            otherStyles="mt-7"
          />
          <FormField
            title="Previous Car Driver"
            value={carAdd.car_previous_driver}
            handleChangeText={(e) => setCarAdd({ ...carAdd, id: e })}
            otherStyles="mt-7"
            keyboardType="numeric"
          />
          <FormField
            title="Car Price Per Minute"
            value={carAdd.car_price}
            handleChangeText={(e) => setCarAdd({ ...carAdd, date: e })}
            otherStyles="mt-7"
          />
          <FormField
            title="Car Status"
            value={carAdd.car_statue}
            handleChangeText={(e) => setCarAdd({ ...carAdd, id: e })}
            otherStyles="mt-7"
            keyboardType="numeric"
          />
          <FormField
            title="Car Model"
            value={carAdd.car_type}
            handleChangeText={(e) => setCarAdd({ ...carAdd, date: e })}
            otherStyles="mt-7"
          />
          <FormField
            title="Car X Coordinate"
            value={carAdd.car_x_coordinate}
            handleChangeText={(e) => setCarAdd({ ...carAdd, date: e })}
            otherStyles="mt-7"
          />
          <FormField 
            title="Car Y Coordinate"
            value={carAdd.car_y_coordinate}
            handleChangeText={(e) => setUpadtePrice({ ...carAdd, id: e })}
            otherStyles="mt-7"
            keyboardType="numeric"
          />

          <CustomButton
            title="Add New Car"
            handlePress={""} //yapilacak islem
            containerStyles="mt-7"
          />

          <FormField 
            title="Car Id"
            value={deleteCar.id}
            handleChangeText={(e) => setDeleteCar({ ...deleteCar, id: e })}
            otherStyles="mt-7"
            keyboardType="numeric"
          />

          <CustomButton
            title="Delete Car"
            handlePress={""} //yapilacak islem
            containerStyles="mt-7 bg-red-100"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default homeAdmin