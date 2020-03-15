import * as React from 'react';
import {
    Image,
    Platform,
    Button,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Linking,
    Dimensions
 } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import Modal from "react-native-modal";



const { width, height } = Dimensions.get('window')


export default class HealthCenters extends React.Component {
    state = {
        posts: [],
        isModalVisible: false
      }

      componentDidMount() {
        axios.get(`https://covid19tt.netlify.com/convertjson.json`)
          .then(res => {
            const posts = res.data;
            this.setState({ posts });
          })
      }
      
    render() {
    return (<View style={{flex: 1}}>
       <View style={{flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10}}>
          <View style={{width: '42%', paddingRight: 10}}><Text style={{fontWeight: 'bold'}}>Name</Text></View>
          <View style={{width: '38%', paddingRight: 10}}><Text style={{fontWeight: 'bold'}}>Number</Text></View>
          <View style={{width: '20%'}}><Text style={{fontWeight: 'bold'}}>Region</Text></View>
          </View>
          <ScrollView style={{flex: 1}}>
          {this.state.posts.map((posts, id) => <View key={id}>
            <TouchableOpacity onPress={() => Linking.openURL(`tel:${posts.Phone}`)}>
          <View style={{borderTopWidth: 1, borderTopColor: '#ececec', marginVertical: 12}} />
          <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
    <View style={{width: '42%', paddingRight: 10}}><Text style={{fontWeight: 'bold'}}>{posts.Facility}</Text></View>
          <View style={{width: '38%', paddingRight: 10}}><Text>{posts.Phone}</Text></View>
          <View style={{width: '20%'}}><Text>{posts.Region}</Text></View>
          </View>
          </TouchableOpacity>
          </View>)}
          </ScrollView>
        </View>);
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
});
