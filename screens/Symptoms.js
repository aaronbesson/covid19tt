import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CheckBox } from 'react-native-elements';


export default class Symptoms extends React.Component {
  state = {
    fever: false,
    feverScore: 0,
    tiredness: false,
    tiredScore: 0,
    cough: false,
    coughScore: 0,
    aches: false,
    achesScore: 0,
    sorethroat: false,
    throatScore: 0,
    runnynose: false,
    noseScore: 0,
    diarrhoea: false,
    diarrhoeaScore: 0,
  };

  render() {
    const score = (this.state.feverScore +
    this.state.tiredScore +
    this.state.coughScore +
    this.state.achesScore +
    this.state.throatScore +
    this.state.noseScore +
    this.state.diarrhoeaScore)

    return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
          <Text style={{fontSize: 72}}>
            {this.state.fever === false ? '😦' : '🤒'}
          </Text>
          <Text style={{color: 'black', fontSize: 24}}>
            Oh no!
          </Text>
          <Text
            style={styles.question}>
            What symptoms do you have?
          </Text>

          {/* <Text>Score: {score}</Text> */}

          <CheckBox
          containerStyle={{width: '90%'}}
          textStyle={{fontSize: 20}}
          checkedColor='red'
          title="Fever"
          checked={this.state.fever}
          onPress={() => this.setState({ fever: true, feverScore: 6 })}
          />

          <CheckBox
          containerStyle={{width: '90%'}}
          textStyle={{fontSize: 20}}
          checkedColor='red'
          title='Dry Cough'
          checked={this.state.cough}
          onPress={() => this.setState({ cough: true, coughScore: 5 })}
          />

          <CheckBox
          containerStyle={{width: '90%'}}
          textStyle={{fontSize: 20}}
          checkedColor='red'
          title='Sore Throat'
          checked={this.state.sorethroat}
          onPress={() => this.setState({ sorethroat: true, throatScore: 4 })}
          />

          <CheckBox
          containerStyle={{width: '90%'}}
          textStyle={{fontSize: 20}}
          checkedColor='red'
          title='Diarrhoea'
          checked={this.state.diarrhoea}
          onPress={() => this.setState({ diarrhoea: true, diarrhoeaScore: 2 })}
          />

          <CheckBox
          containerStyle={{width: '90%'}}
          textStyle={{fontSize: 20}}
          checkedColor='red'
          title='Runny Nose'
          checked={this.state.runnynose}
          onPress={() => this.setState({ runnynose: true, noseScore: 2 })}
          />

          <CheckBox
          containerStyle={{width: '90%'}}
          textStyle={{fontSize: 20}}
          checkedColor='red'
          title='Body Aches'
          checked={this.state.aches}
          onPress={() => this.setState({ aches: true, achesScore: 1 })}
          />

          <CheckBox
          containerStyle={{width: '90%'}}
          textStyle={{fontSize: 20}}
          checkedColor='red'
          title='Tiredness'
          checked={this.state.tiredness}
          onPress={() => this.setState({ tiredness: true, tiredScore: 1 })}
          />

          <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.no}
          onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={{fontSize: 24, color: 'white'}}>Reset</Text>
          </TouchableOpacity>
          {score < 3 ? <TouchableOpacity style={styles.yes}
          onPress={() => score !== 0 && this.props.navigation.navigate('Monitor')}>
            <Text style={{color: 'black',fontSize: 24}}>Next</Text>
          </TouchableOpacity> : <TouchableOpacity style={styles.yes}
          onPress={() => score !== 0 && this.props.navigation.navigate('Travel')}>
            <Text style={{color: 'black',fontSize: 24}}>Next</Text>
          </TouchableOpacity>}
          
          </View>
          </View>
    </ScrollView>
    );
  }
}

Symptoms.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center'
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
