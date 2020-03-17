import * as React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Linking,
    FlatList,
    ActivityIndicator,
    Dimensions,
    Alert
 } from 'react-native';
import axios from 'axios';
import { ListItem, SearchBar } from 'react-native-elements';

const { width, height } = Dimensions.get('window')

export default class HealthCenters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
    };
    this.arrayholder = [];
  }

      componentDidMount() {
      this.setState({ loading: true });
        axios.get(`https://covid19tt.netlify.com/convertjson.json`)
          .then(res => {
            const data = res.data;
            this.arrayholder = res.data;
            this.setState({ data, loading: false, });
          })
      }

      renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#ececec',
            }}
          />
        );
      };
    
      searchFilterFunction = text => {
        this.setState({
          value: text,
        });
    
        const newData = this.arrayholder.filter(item => {
        const itemData = `${item.Facility.toUpperCase()} ${item.Region.toUpperCase()} ${item.Phone.toUpperCase()}`;
        const textData = text.toUpperCase();
    
          return itemData.indexOf(textData) > -1;
        });
        this.setState({
          data: newData,
        });
      };
    
      renderHeader = () => {
        return (
          <SearchBar
            placeholder="Search Health Centers"
            containerStyle={{backgroundColor: 'white'}}
            lightTheme
            inputStyle={{color: '#000'}}
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={true}
            value={this.state.value}
          />
        );
      };
      
    render() {
      if (this.state.loading) {
        return (
          <View style={styles.activityContainer}>
            <ActivityIndicator />
          </View>
        );
      }
    return (
    <View style={{flex: 1}}>

      <FlatList
      data={this.state.data}
      renderItem={({ item }) => (
      <TouchableOpacity onPress={() => {
        Alert.alert(
          `${item.Facility}`,
          '',
          [
            {text: 'Call Now', onPress: () => Linking.openURL(`tel:${item.Phone}`)},
            {text: 'Get Directions', onPress: () => Linking.openURL(`https://www.google.com/maps/dir//${item.Facility},Trinidad+Tobago,15z`)},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          ],
          { cancelable: false }
        )
      }}>
      <ListItem
      title={`${item.Facility}`}
      titleStyle={{fontSize: 17, fontWeight: 'bold'}}
      subtitle={item.Region}
      subtitleStyle={{fontSize: 12, color: '#646464'}}
      rightTitle={item.Phone}
      rightTitleStyle={{fontSize: 12}}
      />
      </TouchableOpacity>
      )}
      keyExtractor={item => item.Facility}
      ItemSeparatorComponent={this.renderSeparator}
      ListHeaderComponent={this.renderHeader}
      stickyHeaderIndices={[0]}
      bounces={false}
      />

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  activityContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
