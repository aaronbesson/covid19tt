import * as React from 'react';
import { Image, Platform, StyleSheet, Text, ScrollView } from 'react-native';
import { View } from 'react-native-web'


export default function Safety({navigation}) {
  return (<ScrollView>
    <View style={styles.container}>
  <View>
<Text style={{fontSize: 80, textAlign: 'center'}}>👏</Text>
  <Text style={[styles.center, styles.h3]}>Wash your hands properly with soap and water for 20 seconds</Text>
  <Text style={[styles.center, styles.poptext]}>Use an alcohol-based hand sanitizer if water and soap are not available  </Text></View>

<View>
<Text style={{fontSize: 80, textAlign: 'center'}}>🤧</Text>
  <Text style={[styles.center, styles.h3]}>Cover your nose and mouth with a tissue when you cough or sneeze</Text>
  <Text style={[styles.center, styles.poptext]}>Dispose of tissue immediately after using. Cough and sneeze into the crook of your elbow if you do not have a tissue</Text></View>

<View>
<Text style={{fontSize: 80, textAlign: 'center'}}>🤭</Text>
  <Text style={[styles.center, styles.h3]}>Avoid touching your face</Text>
  <Text style={[styles.center, styles.poptext]}>Don't touch your eyes, nose or mouth wiht your hands to avoid getting infected.</Text></View>

  <View>
  <Text style={{fontSize: 80, textAlign: 'center'}}>❌🤝❌</Text>
  <Text style={[styles.center, styles.h3, {marginTop: 30}]}>Avoid Shaking Hands</Text>
  <Text style={[styles.center, styles.poptext]}>Avoid shaking hands, kissing people hello and unnecessary contact with people in public.</Text></View>

<View>
<Text style={{fontSize: 80, textAlign: 'center'}}>😷</Text>
  <Text style={[styles.center, styles.h3]}>Stay home if you are ill</Text>
  <Text style={[styles.center, styles.poptext]}>Avoid close contact with people who have flu-like symptoms or if you are feeling sick.</Text></View>

    </View>
    </ScrollView>);
}

Safety.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 40,
    alignItems: 'center'
  },
  yes: {
    width: '25%',
    margin: 20,
    padding: 12,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold'
  },
  no: {
    width: '25%',
    margin: 20,
    padding: 12,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  },
  h3: {
  fontSize: 24,
  fontWeight: 'bold'
  },
  center: {
  textAlign: 'center'
  },
  poptext: {
    fontSize: 18,
    paddingVertical: 20
  }
});
