import React, { useEffect, useRef, useState } from "react";

/*Vendor*/
import { AntDesign } from "@expo/vector-icons";
import {
  Button,
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Camera } from "expo-camera";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as FileSystem from "expo-file-system";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

/* Custom CSS */
import formatStyle from "./assets/css/format";

/* Navigation*/
const ProfileStack = createStackNavigator();
const HomeStack = createStackNavigator();
const AppTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppTab.Navigator initialRouteName="home">
        <AppTab.Screen
          component={HomeNavigator}
          name="home"
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={24} color="black" />
            ),
          }}
        />
        <AppTab.Screen
          component={ProfileNavigator}
          name="profile"
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" size={24} color="black" />
            ),
          }}
        />
      </AppTab.Navigator>
    </NavigationContainer>
  );
}

function ProfileNavigator({ navigation }) {
  return (
    <ProfileStack.Navigator initialRouteName="home">
      <ProfileStack.Screen
        component={ProfileScreen0}
        name="profile"
        options={{
          title: "Profile Screen 0",
        }}
      />
      <ProfileStack.Screen
        component={ProfileScreen1}
        name="account"
        options={{
          title: "Profile Screen 1",
        }}
      />
      <ProfileStack.Screen
        component={ProfileScreen2}
        name="billing"
        options={{
          title: "Profile Screen 2",
        }}
      />
    </ProfileStack.Navigator>
  );
}

function HomeHeader() {
  const [hasPermission, setHasPermission] = useState(false);

  const actions = {
    requestAccess: async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
      // setType(
      //   type === Camera.Constants.Type.back
      //     ? Camera.Constants.Type.front
      //     : Camera.Constants.Type.back
      // );
    },
    toggle: () => {
      setHasPermission(!hasPermission);
    },
  };
  return (
    <View
      style={{
        ...formatStyle.row,
        ...formatStyle.between,
        ...formatStyle.center,
      }}
    >
      <Text style={{ flex: 1 }}>Home</Text>

      <Pressable
        onPress={actions.requestAccess}
        style={{
          alignItems: "center",
          display: "flex",
          height: 50,
          justifyContent: "center",
          width: 50,
        }}
      >
        <AntDesign name="camerao" size={24} color="black" />
      </Pressable>
    </View>
  );
}

function HomeNavigator({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        component={HomeScreen}
        name="home"
        options={{ headerTitle: (props) => <HomeHeader {...props} /> }}
      />
    </HomeStack.Navigator>
  );
}

function HomeScreen({ navigation }) {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cam = useRef(null);

  const actions = {
    download: async (url) => {
      let fileName = new Date().getTime() + ".jpg";
      if (Platform.OS === "web") {
        let link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        link.click();
      } else {
        let filePath = FileSystem.documentDirectory + fileName;
        await filePath.writeAsStringAsync(filePath, url, {
          encoding: FileSystem.EncodingType.Base64,
        });
      }
    },
    takePicture: async () => {
      const options = { quality: 1, base64: true };
      const data = await cam.current.takePictureAsync(options);
      actions.download(data.uri);
    },
  };

  return (
    <View style={styles.container}>
      <Camera ref={cam} style={styles.container} type={type}>
        <View
          style={{
            ...styles.container,
            height: 200,
            width: Dimensions.get("window").width,
          }}
        ></View>
        <Button onPress={actions.takePicture} title="Picture"></Button>
      </Camera>
      <Button
        onPress={() => navigation.navigate("profile")}
        title="To ProfileScreen"
      />
      <StatusBar style="auto" />
    </View>
  );
}

function ProfileScreen0({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button
        onPress={() => navigation.navigate("account")}
        title="My Account"
      />
      <Button
        onPress={() => navigation.navigate("billing")}
        title="My Billing"
      />
      <StatusBar style="auto" />
    </View>
  );
}

function ProfileScreen1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Profile Screen 1</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function ProfileScreen2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Profile Screen 2</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
