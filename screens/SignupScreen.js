import { Text, View, TextInput, Button } from "react-native";
import firebase from "@firebase/app";
import Colors from "../constants/Colors";
import React, { useState, useEffect } from "react";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  const onPressCreate = async () => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(onSuccess, onFailure);
  };
  
  // const login_Success = () => {
  //   console.log("SUCCESS");
  // };
  
  const onFailure = () => {
    alert("Login failure. Please try again.");
  };

  // const signup_Success = (userCredential) => {
  //   console.log("SUCCESS");
  //   var curr_user = userCredential.user;
  //   curr_user.updateProfile({
  //     displayName: name,
  //   });
  // };

  const onSuccess = (userCredential) => {
    console.log("SUCESS");
    var curr_user = userCredential.user;
    curr_user.updateProfile({
      displayName: name,
    });
  };
  
  return (
    <View>
      <Text>Email:</Text>
      <TextInput onChangeText={setEmail} />
      <Text>Password (6+ characters):</Text>
      <TextInput onChangeText={setPassword} />
      <Text>Name:</Text>
      <TextInput onChangeText={setName} />
      <Button
        onPress={onPressCreate}
        title="Sign up"
        color={Colors.snapblue}
        accessibilityLabel="Sign up"
      />
    </View>
  );
}