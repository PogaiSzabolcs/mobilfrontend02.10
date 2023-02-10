import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Elso from './Elso';
import Eteltabla from './Eteltabla';
import Kereses from './Kereses';
import Etelfelvitel from './Etelfelvitel';
import Receptfelvitel from './Receptfelvitel';
import Nevjegy from './Nevjegy';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Ételek')}
        title="Ugrás az ételekhez"
      />
      <Button
        onPress={() => navigation.navigate('Keresés')}
        title="Ugrás étel kereséshez"
      />
      <Button
        onPress={() => navigation.navigate('Étel Feltöltés')}
        title="Ugrás étel feltöltéshez"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
function Elso_lap({ navigation }) {
  return (
    <Elso / >
  );
}

function Etel_lap({ navigation }) {
  return (
    <Eteltabla / >
  );
}

function Kereses_lap({ navigation }) {
  return (
    <Kereses / >
  );
}

function Etelfelvitel_lap({ navigation }) {
  return (
    <Etelfelvitel / >
  );
}

function Receptfelvitel_lap({ navigation }) {
  return (
    <Receptfelvitel / >
  );
}

function Nevjegy_lap({ navigation }) {
  return (
    <Nevjegy / >
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Kezdőlap" component={HomeScreen} />
        <Drawer.Screen name="Ételek" component={Etel_lap} />
        <Drawer.Screen name="Keresés" component={Kereses_lap} />
        <Drawer.Screen name="Étel Feltöltés" component={Etelfelvitel_lap} />
        <Drawer.Screen name="Recept Feltöltés" component={Receptfelvitel_lap} />
        <Drawer.Screen name="Névjegy" component={Nevjegy_lap} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

