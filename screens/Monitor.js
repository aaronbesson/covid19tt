import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';


export default class Monitor extends React.Component {
  state = {
  };

  render() {
    return (
    <View style={styles.container}>
    <Text style={styles.bigEmoji}>🤒</Text>
    <Text style={styles.instruction}>You should self-quarantine for seven (7) days. Get a lot of rest, take your vitamins and drink a lot of water.</Text>
    <Text
    style={styles.notice}>
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
  instruction: {color: 'black', fontSize: 24, textAlign: 'center'},
  bigEmoji: {fontSize: 120, textAlign: 'center'},
  notice: {
    backgroundColor: 'transparent',
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
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
