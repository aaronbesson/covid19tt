import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { View } from 'react-native-web'

export default class Monitor extends React.Component {
  state = {
    fever: false,
    tiredness: false,
    cough: false,
    aches: false,
    sorethroat: false,
    runnynose: false
  };

  render() {
    return (
<View style={styles.container}>
          <Text style={{fontSize: 120}}>🤒</Text>
          <Text style={{color: 'black', fontSize: 24, textAlign: 'center'}}>You should self-quarantine for seven (7) days. Get a lot of rest, take your vitamins and drink a lot of water.</Text>
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 28,
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
              marginVertical: 20
            }}>
            You should monitor your symptoms carefully and speak with a doctor if they get worse.
          </Text>
          <View style={{flexDirection: 'row'}}>

<TouchableOpacity style={styles.yes} onPress={() => this.props.navigation.navigate('Links')}>
  <Text style={{color: 'black',fontSize: 24}}>Continue</Text>
</TouchableOpacity>
</View>
          </View>
    );
  }
}

Monitor.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  yes: {
    width: '100%',
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
  }
});
