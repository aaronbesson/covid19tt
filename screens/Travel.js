import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';


export default class Travel extends React.Component {
  state = {
  };

  render() {
    return (
      <View style={styles.container}>
      <Text style={{fontSize: 120}}>🤒</Text>
      <Text style={{color: 'black', fontSize: 24}}>Ok. Tell me something...</Text>
      <Text
      style={styles.question}>
      Have you been overseas in the last month?
      </Text>

      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity style={styles.no}
      onPress={() => this.props.navigation.navigate('Household')}>
      <Text style={{fontSize: 24, color: 'white'}}>No</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.yes}
      onPress={() => this.props.navigation.navigate('TravelLocation')}>
      <Text style={{color: 'black',fontSize: 24}}>Yes</Text>
      </TouchableOpacity>
      </View>
      </View>
    );
  }
}

Travel.navigationOptions = {
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
  question: {
    backgroundColor: 'transparent',
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
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
