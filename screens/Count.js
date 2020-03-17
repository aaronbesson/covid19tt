import * as React from 'react';
import {
    Image,
    Platform,
    Button,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions
 } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import Modal from "react-native-modal";



const { width, height } = Dimensions.get('window')


export default class Count extends React.Component {
    state = {
        posts: [],
        isModalVisible: false
      }

      componentDidMount() {
        axios.get(`https://corona.lmao.ninja/countries`)
          .then(res => {
            const posts = res.data;
            this.setState({ posts });
          })
      }

      toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
      };
    render() {
    return (<View style={{height: 48}}>
      <Modal isVisible={this.state.isModalVisible}>
          <View>
            <TouchableOpacity onPress={this.toggleModal}>
            <View style={{ width: width - 40, height: width, backgroundColor: 'white', marginTop: 80,
          paddingHorizontal: 20, borderRadius: 13 }}>
            <Text style={{fontSize: 18, textAlign: 'center', paddingVertical: 20}}>
              COVID19 in Trinidad and Tobago</Text>
            {this.state.posts.map((posts, id) => <View key={id}>
            {posts.country === 'Trinidad and Tobago' && <View style={{
            paddingHorizontal: 0, paddingVertical: 6, width: width - 80, 
            justifyContent: 'space-around',
            backgroundColor: 'white',
            }}>
              
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={{width: '80%'}}>
            <Text style={{padding: 10, fontSize: 18, fontWeight: 'bold'}}>🇹🇹 Total Confirmed Cases:</Text>
            </View>
            <View style={{width: '20%'}}>
            <Text style={{padding: 10, fontSize: 18, textAlign: 'right'}}>{posts.cases}</Text>
            </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={{width: '80%'}}>
            <Text style={{padding: 10, fontSize: 18, fontWeight: 'bold'}}>🇹🇹 New Cases Today:</Text>
            </View>
            <View style={{width: '20%'}}>
            <Text style={{padding: 10, fontSize: 18, textAlign: 'right'}}>{posts.todayCases}</Text>
            </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={{width: '80%'}}>
            <Text style={{padding: 10, fontSize: 18, fontWeight: 'bold'}}>🇹🇹 Critical:</Text>
            </View>
            <View style={{width: '20%'}}>
            <Text style={{padding: 10, fontSize: 18, textAlign: 'right'}}>{posts.critical}</Text>
            </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={{width: '80%'}}>
            <Text style={{padding: 10, fontSize: 18, fontWeight: 'bold'}}>🇹🇹 Deaths:</Text>
            </View>
            <View style={{width: '20%'}}>
            <Text style={{padding: 10, fontSize: 18, textAlign: 'right'}}>{posts.deaths}</Text>
            </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={{width: '80%'}}>
            <Text style={{padding: 10, fontSize: 18, fontWeight: 'bold'}}>🇹🇹 Deaths Today: </Text>
            </View>
            <View style={{width: '20%'}}>
            <Text style={{padding: 10, fontSize: 18, textAlign: 'right'}}>{posts.todayDeaths}</Text>
            </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={{width: '80%'}}>
            <Text style={{padding: 10, fontSize: 18, fontWeight: 'bold'}}>🇹🇹 Recovered: </Text>
            </View>
            <View style={{width: '20%'}}>
            <Text style={{padding: 10, fontSize: 18, textAlign: 'right'}}>{posts.recovered}</Text>
            </View>
            </View>

            </View>}
            
            </View>)}
            <Text style={{paddingHorizontal: 10, fontSize: 11, paddingTop: 20}}>Source: https://www.worldometers.info/coronavirus/</Text>
            <Text style={{paddingHorizontal: 10, fontSize: 11}}>Source: https://www.who.int</Text>
            </View>
            </TouchableOpacity>
          </View>
          <Text style={{textAlign: 'center', padding: 20, color: 'white'}}>Tap window to close</Text>
        </Modal>
      <TouchableOpacity onPress={this.toggleModal}>
        <ScrollView style={styles.container} bounces={false}>

            {this.state.posts.map((posts, id) => <View key={id}>
            {posts.country === 'Trinidad and Tobago' && <View style={{flexDirection: 'row',
            paddingHorizontal: 0, paddingVertical: 3, width: width, justifyContent: 'space-around',
            backgroundColor: '#222',
            }}>
            <View style={{flexDirection: 'row'}}>
            <Text style={{padding: 10, fontSize: 14, fontWeight: 'bold', color: 'white'}}>🇹🇹 Confirmed Cases:</Text>
            <Text style={{padding: 10, fontSize: 16, color: 'white'}}>{posts.cases}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
            <Text style={{padding: 10, fontSize: 14, fontWeight: 'bold', color: 'white'}}>🇹🇹 Deaths: </Text>
            <Text style={{padding: 10, fontSize: 16, color: 'white'}}>{posts.deaths}</Text>
            </View>

            </View>}

            </View>)}
        </ScrollView></TouchableOpacity>
        </View>);
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
});
