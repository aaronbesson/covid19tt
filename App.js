import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';
import Symptoms from './screens/Symptoms';
import Travel from './screens/Travel';
import TravelLocation from './screens/TravelLocation';
import Quarantine from './screens/Quarantine';
import Tested from './screens/Tested';
import Monitor from './screens/Monitor';
import { TransitionPresets } from '@react-navigation/stack';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

const PUSH_ENDPOINT = 'https://easy-soup.glitch.me/token';

const Stack = createStackNavigator();

async function registerForPushNotifications() {
  const { status } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  if (status !== 'granted') {
    await Permissions.askAsync(Permissions.NOTIFICATIONS);
  }
  // Get the token that identifies this device
  let token = await Notifications.getExpoPushTokenAsync();

  // POST the token to your backend server from where you can retrieve it to send push notifications.
  return fetch(PUSH_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: {
        value: token,
      }
    }),
  });
}

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    registerForPushNotifications();
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
       <StatusBar barStyle='light-content' />
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
        <SafeAreaView style={{ flex: 0, backgroundColor: 'black' }} />
        {Platform.OS !== 'ios' && <View style={{backgroundColor: 'black', paddingTop: 20}} />}
          <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            cardOverlayEnabled: true,
            ...TransitionPresets.ModalPresentationIOS,
          }}
          mode="card"
          headerMode='none'
          >
            <Stack.Screen name="Root" component={BottomTabNavigator} />
            <Stack.Screen name="Symptoms" component={Symptoms} options={{ headerLeft: () => ( <View /> ) }} />
            <Stack.Screen name="Travel" component={Travel} options={{ headerLeft: () => ( <View /> ) }} />
            <Stack.Screen name="TravelLocation" component={TravelLocation} options={{ headerLeft: () => ( <View /> ) }} />
            <Stack.Screen name="Quarantine" component={Quarantine} options={{ headerLeft: () => ( <View /> ) }} />
            <Stack.Screen name="Tested" component={Tested} options={{ headerLeft: () => ( <View /> ) }} />
            <Stack.Screen name="Monitor" component={Monitor} options={{ headerLeft: () => ( <View /> ) }} />
          </Stack.Navigator>
          <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
