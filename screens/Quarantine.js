import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { View } from 'react-native-web'

export default class Quarantine extends React.Component {
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
          <Text style={{fontSize: 120}}>😷</Text>
          <Text style={{color: 'black', fontSize: 24, textAlign: 'center'}}>You should self-quarantine for fourteen (14) days.</Text>
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 28,
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
              marginVertical: 20
            }}>
            Do you need to speak with a doctor?
          </Text>

          <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.no} onPress={() => this.props.navigation.navigate('Links')}>
            <Text style={{fontSize: 24, color: 'white'}}>No</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.yes} onPress={() => this.props.navigation.navigate('Contacts')}>
            <Text style={{color: 'black',fontSize: 24}}>Yes</Text>
          </TouchableOpacity>
          </View>
          </View>
    );
  }
}

Quarantine.navigationOptions = {
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
    width: '45%',
    marginTop: 20,
    padding: 12,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold'
  },
  no: {
    width: '45%',
    marginTop: 20,
    padding: 12,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  }
});
