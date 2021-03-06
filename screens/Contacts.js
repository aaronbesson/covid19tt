import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import HealthCenters from './HealthCenters';
import Doctors from './Doctors';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>

<ScrollableTabView
style={{ width: '100%', height: '100%' }} locked>

<View tabLabel="Health Facilities" style={{flex: 1}}>
        <HealthCenters />
        <Text style={styles.finePrint}>Tap a contact to call</Text>
        </View>
        <View tabLabel="Doctors" style={{
          flex: 1,
          justifyContent: 'space-between',
          paddingBottom: 80
          }}>
        <Doctors />
        </View>
        <View tabLabel="Hospital Map" style={{flex: 1}}>
        <WebView
        source={{ uri: 'https://www.google.com/maps/search/hospitals' }}
        style={{ width: '100%', height: '100%', marginTop: -64 }}
      />
        </View>
      </ScrollableTabView>
          
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  finePrint: {fontSize: 10, textAlign: 'center', padding: 4},
});
