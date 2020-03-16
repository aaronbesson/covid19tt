import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CheckBox } from 'react-native-elements';


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
          <Text style={{color: 'black', fontSize: 24, textAlign: 'center'}}>You should self-quarantine for fourteen (14) days. Get a lot of rest, take your vitamins and drink a lot of water. You should monitor your symptoms carefully and speak with a doctor if they get worse.</Text>
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 28,
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
              marginVertical: 20
            }}>
            Would you like to speak with a doctor?
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
