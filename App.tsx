import React from "react";
import { View, Text, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import AuthProvider from "./src/contexts/auth";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" translucent={false} />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}