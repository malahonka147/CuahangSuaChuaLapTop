import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import QLNV from './components/QLNV';
import CTNV from './components/CTNV';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Main from './components/Main';
import QLSP from './components/QLSP';
import QLPN from './components/QLPN';
import ThemPN from './components/ThemPN';
import ThemSP from './components/ThemSP';
import SuaNV from './components/SuaNV';
import ThemNV from './components/ThemNV';
import CTPN from './components/CTPN';
<<<<<<< HEAD
import CTSP from './components/CTSP'
=======
<<<<<<< HEAD
import CTSP from './components/CTSP';

=======
>>>>>>> 7f4be353ff962eb3bfa8424e6b9340e93329ea3b
import ThemCTPN from './components/ThemCTPN';
>>>>>>> f4baf72dbb37af8fd7e1009a0e41870b7e0ee667
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
      
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false,}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false,}} />
        <Stack.Screen name="QLNV" component={QLNV} options={{headerShown: false,}} />
        <Stack.Screen name="CTNV" component={CTNV} options={{headerShown: false,}} />
        <Stack.Screen name="Main" component={Main} options={{headerShown: false,}} />
        <Stack.Screen name="QLPN" component={QLPN} options={{headerShown: false,}} />
        <Stack.Screen name="QLSP" component={QLSP} options={{headerShown: false,}} />
        <Stack.Screen name="ThemSP" component={ThemSP} options={{headerShown: false,}} />
        <Stack.Screen name="ThemPN" component={ThemPN} options={{headerShown: false,}} />
        <Stack.Screen name="SuaNV" component={SuaNV} options={{headerShown: false,}} />
        <Stack.Screen name="ThemNV" component={ThemNV} options={{headerShown: false,}} />
<<<<<<< HEAD
        <Stack.Screen name="CTSP" component={CTSP} options={{headerShown: false,}}/>

=======
<<<<<<< HEAD
        <Stack.Screen name="CTSP" component={CTSP} options={{headerShown: false,}}/>
        <Stack.Screen name="CTPN" component={ThemNV} options={{headerShown: false,}} />

=======
>>>>>>> 7f4be353ff962eb3bfa8424e6b9340e93329ea3b
        <Stack.Screen name="CTPN" component={CTPN} options={{headerShown: false,}} />
        <Stack.Screen name="ThemCTPN" component={ThemCTPN} options={{headerShown: false,}} />
>>>>>>> f4baf72dbb37af8fd7e1009a0e41870b7e0ee667
      </Stack.Navigator>
    </NavigationContainer>
  );
}
