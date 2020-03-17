import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Linking } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { WebView } from 'react-native-webview';
import axios from 'axios';

const { width, height } = Dimensions.get('window')

export default class Count extends React.Component {
  state = {
    links: []
  }

  componentDidMount() {
    axios.get(`https://covid19tt.netlify.com/links.json`)
      .then(res => {
        const links = res.data;
        this.setState({ links });
      })
  }
  render() {
  return (<View style={{flex: 1}}>
    <ScrollableTabView style={{ width: '100%', height: '100%' }} locked>
    
    <View tabLabel="Local Resources" style={{flex: 1}}>
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

<Text style={styles.pageTitle}>☎ Local Resources</Text>

<Text style={styles.copyText}>
  If you are experiencing flu-like symptoms and have recently travelled outside of Trinidad and Tobago, or have come into close contact with someone who has travelled internationally, please self-quarantine and call your nearest public health facility.
</Text>

{this.state.links.map((links, id) => <View key={id} style={{marginBottom: 20}}>
      <OptionButton
        icon={links.icon}
        label={links.title}
        onPress={() => WebBrowser.openBrowserAsync(links.link)}
      />
 </View>)}

    </ScrollView>
      </View>

      {/* <View tabLabel="Global Stats" style={{flex: 1}}>
      <WebView
        source={{ uri: 'https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd' }}
        style={{ width: '100%', height: '100%' }}
      />
      </View> */}

    </ScrollableTabView>
    
    <TouchableOpacity
    onPress={() => Linking.openURL(`tel:${18688779742}`)}
    style={styles.hotlineButton}>
      <MaterialCommunityIcons name="phone" size={24} color="#222" />
      <Text style={styles.hotline}>Call the COVID19 Hotline</Text>
    </TouchableOpacity>
    </View>
  );
}
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
  pageTitle: {marginTop: 20, fontSize: 24, paddingHorizontal: 20, fontWeight: 'bold'},
  copyText: {marginVertical: 20, fontSize: 16, paddingHorizontal: 20},
  hotlineButton: {
    backgroundColor: 'gold',
    width: width,
    height: 48,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
     flexDirection:'row',
  },
hotline: {fontSize: 18, color: '#222', paddingLeft: 8, fontWeight: 'bold'}
});
