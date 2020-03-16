import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { WebView } from 'react-native-webview';


const { width, height } = Dimensions.get('window')

export default function LinksScreen() {
  return (<View style={{flex: 1}}>
    <ScrollableTabView style={{ width: '100%', height: '100%' }} locked>
    
    <View tabLabel="Local Resources" style={{flex: 1}}>
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

<Text style={{marginTop: 20, fontSize: 24, paddingHorizontal: 20, fontWeight: 'bold'}}>☎ Local Resources</Text>

<Text style={{marginVertical: 20, fontSize: 16, paddingHorizontal: 20}}>If you are experiencing flu-like symptoms and have recently travelled outside of Trinidad and Tobago, or have come into close contact with someone who has travelled internationally, please self-quarantine and call your nearest public health facility.</Text>


      <OptionButton
        icon="compass"
        label="Ministry of Health T&T Website"
        onPress={() => WebBrowser.openBrowserAsync('http://www.health.gov.tt/news/')}
      />

      <OptionButton
        icon="twitter"
        label="Ministry of Health T&T Twitter"
        onPress={() => WebBrowser.openBrowserAsync('https://twitter.com/MOH_TT')}
      />

      <OptionButton
        icon="compass"
        label="World Health Organization Website"
        onPress={() => WebBrowser.openBrowserAsync('https://www.who.int/emergencies/diseases/novel-coronavirus-2019')}
      />

      <OptionButton
        icon="twitter"
        label="WHO Twitter"
        onPress={() => WebBrowser.openBrowserAsync('https://twitter.com/WHO')}
      />

      <OptionButton
        icon="compass"
        label="Advice for the Public (WHO)"
        onPress={() => WebBrowser.openBrowserAsync('https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public')}
      />

      <OptionButton
        icon="compass"
        label="Centers for Disease Control (CDC US)"
        onPress={() => WebBrowser.openBrowserAsync('https://www.cdc.gov/coronavirus/2019-nCoV/index.html')}
      />

      <OptionButton
        icon="newspaper"
        label="News.Gov.TT"
        onPress={() => WebBrowser.openBrowserAsync('http://www.news.gov.tt/features-and-analysis/health')}
      />

      <OptionButton
        icon="newspaper"
        label="Trinidad Express"
        onPress={() => WebBrowser.openBrowserAsync('https://trinidadexpress.com')}
      />

      <OptionButton
        icon="newspaper"
        label="LoopTT"
        onPress={() => WebBrowser.openBrowserAsync('https://looptt.com')}
      />



      <OptionButton
        icon="youtube"
        label="TV6"
        onPress={() => WebBrowser.openBrowserAsync('https://www.tv6tnt.com')}
      />  




    </ScrollView>
      </View>

      <View tabLabel="Global Stats" style={{flex: 1}}>
      <WebView
        source={{ uri: 'https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd' }}
        style={{ width: '100%', height: '100%' }}
      />
      </View>

    </ScrollableTabView>
    
    <TouchableOpacity
    onPress={() => Linking.openURL(`tel:${18688779742}`)}
    style={{
      backgroundColor: 'gold',
      width: width,
      height: 48,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
       flexDirection:'row',
    }}>
      <MaterialCommunityIcons name="phone" size={24} color="#222" />
      <Text style={{fontSize: 18, color: '#222', paddingLeft: 8, fontWeight: 'bold'}}>Call the COVID19 Hotline</Text>
    </TouchableOpacity>
    </View>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <MaterialCommunityIcons name={icon} size={28} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 18,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
