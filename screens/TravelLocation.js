import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CheckBox } from 'react-native-elements';


export default class TravelLocation extends React.Component {
  state = {
    asia: false,
    asiaValue: 0,
    europe: false,
    euroValue: 0,
    usa: false,
    usaValue: 0,
    africa: false,
    africaValue: 0,
    australia: false,
    austValue: 0,
    caribbean: false,
    caribValue: 0,
    southamerica: false,
    southValue: 0,
    middleeast: false,
    middleValue: 0,
    travelScore: 0
  };

  render() {
    const score = 
            this.state.asiaValue +
            this.state.euroValue +
            this.state.middleValue +
            this.state.usaValue +
            this.state.africaValue +
            this.state.austValue +
            this.state.southValue +
            this.state.caribValue
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
<View  style={styles.container}>
          <Text style={{fontSize: 72}}>{score < 5 ? '🤒' : '😷'}</Text>
          <Text style={{color: 'black', fontSize: 24, textAlign: 'center'}}>Where did you go?</Text>
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 28,
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
              marginVertical: 20
            }}>
            Where have you been in the last 30 days?
          </Text>
          {/* <Text>Score: {score}</Text> */}

          <CheckBox
          containerStyle={{width: '90%'}}
          textStyle={{fontSize: 20}}
          checkedColor='red'
          title='Africa'
          checked={this.state.africa}
          onPress={() => this.setState({ africa: true, africaValue: 3 })}
          />

          
          <CheckBox
          containerStyle={{width: '90%'}}
          textStyle={{fontSize: 20}}
          checkedColor='red'
          title="Asia"
          checked={this.state.asia}
          onPress={() => this.setState({ asia: true, asiaValue: 6 })}
          />

          <CheckBox
          containerStyle={{width: '90%'}}
          textStyle={{fontSize: 20}}
          checkedColor='red'
          title='Australia'
          checked={this.state.australia}
          onPress={() => this.setState({ australia: true, austValue: 3 })}
          />

          <CheckBox
          containerStyle={{width: '90%'}}
          textStyle={{fontSize: 20}}
          checkedColor='red'
          title='Caribbean'
          checked={this.state.caribbean}
          onPress={() => this.setState({ caribbean: true, caribValue: 2 })}
          />

          <CheckBox
          containerStyle={{width: '90%'}}
          textStyle={{fontSize: 20}}
          checkedColor='red'
          title='Central/South America'
          checked={this.state.southamerica}
          onPress={() => this.setState({ southamerica: true, southValue: 2 })}
          />

          <CheckBox
          containerStyle={{width: '90%'}}
          textStyle={{fontSize: 20}}
          checkedColor='red'
          title='Europe/UK'
          checked={this.state.europe}
          onPress={() => this.setState({ europe: true, euroValue: 5 })}
          />

          <CheckBox
          containerStyle={{width: '90%'}}
          textStyle={{fontSize: 20}}
          checkedColor='red'
          title='Middle East'
          checked={this.state.middleeast}
          onPress={() => this.setState({ middleeast: true, middleValue: 4 })}
          />

          <CheckBox
          containerStyle={{width: '90%'}}
          textStyle={{fontSize: 20}}
          checkedColor='red'
          title='United States'
          checked={this.state.usa}
          onPress={() => this.setState({ usa: true, usaValue: 2 })}
          />


<View style={{flexDirection: 'row'}}>
          

          <TouchableOpacity style={styles.no} onPress={() => this.props.navigation.navigate('Travel')}>
            <Text style={{fontSize: 24, color: 'white'}}>Reset</Text>
          </TouchableOpacity>
            {score < 3 && <TouchableOpacity style={styles.yes} onPress={() => this.props.navigation.navigate('Quarantine')}>
            <Text style={{color: 'black',fontSize: 24}}>Next</Text>
          </TouchableOpacity>}
          {score >= 3 && <TouchableOpacity style={styles.yes} onPress={() => this.props.navigation.navigate('Tested')}>
            <Text style={{color: 'black',fontSize: 24}}>Next</Text>
          </TouchableOpacity>}
          </View>
          </View>
    </ScrollView>
    );
  }
}

TravelLocation.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center'
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
