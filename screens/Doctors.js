import * as React from 'react';
import {
    Image,
    Platform,
    Button,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    Dimensions
 } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import Modal from "react-native-modal";
import { View } from 'react-native-web'


const { width, height } = Dimensions.get('window')


export default class HealthCenters extends React.Component {
    state = {
        posts: [],
        isModalVisible: false
      }

      componentDidMount() {
        axios.get(`https://covid19tt.netlify.com/doctors.json`)
          .then(res => {
            const posts = res.data;
            this.setState({ posts });
          })
      }
    render() {
    return (<View style={{height: height - 120, width: width}}>
       <View style={{flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10}}>
          <View style={{width: '42%', paddingRight: 10}}><Text style={{fontWeight: 'bold'}}>Name</Text></View>
          <View style={{width: '33%', paddingRight: 10}}><Text style={{fontWeight: 'bold'}}>Number</Text></View>
          <View style={{width: '25%'}}><Text style={{fontWeight: 'bold'}}>Region</Text></View>
          </View>
          <ScrollView style={{height: height, width: width}}>
          {this.state.posts.map((posts, id) => <View key={id}>
            <TouchableOpacity onPress={() => Linking.openURL(`tel:${posts.phone}`)}>
          <View style={{borderTopWidth: 1, borderTopColor: '#ececec', marginVertical: 12}} />
          <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
    <View style={{width: '42%', paddingRight: 10}}><Text style={{fontWeight: 'bold'}}>{posts.Title} {posts.firstname} {posts.lastname}</Text></View>
          <View style={{width: '33%', paddingRight: 10}}><Text>{posts.phone}</Text></View>
          <View style={{width: '25%'}}><Text>{posts.position}</Text></View>
          </View>
          </TouchableOpacity>
          </View>)}
          </ScrollView>
          <Text style={{fontSize: 10, textAlign: 'center', padding: 4}}>Tap a contact to call</Text>
        </View>);
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
});
