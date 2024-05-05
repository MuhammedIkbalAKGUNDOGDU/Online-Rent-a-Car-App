import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from "../../components/CustomButton";

const SignIn = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const submit = async () => {

  };
  
  return (
    <SafeAreaView className = "bg-primary h-full" >
      <ScrollView contentContainerStyle = {{height : '%100'}}>
        <View className ="w-full justify-top  min-h-[85vh] px-4 my-6">
          <Image className=" w-[115px] h-[150px]" source={images.Algotur} resizeMode='contain'/>
          <Text className="text-secondary text-2xl">Sign in to ALGOTUR</Text>
          <FormField

            title="Telephone Number"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="numeric"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={() => router.push("/home")}
            containerStyles="mt-7"
            isLoading={isSubmitting}
           
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Sign up
            </Link>
          </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn