import * as React from 'react';
import { Image, Platform, StyleSheet, Text, ScrollView, View } from 'react-native';
import axios from 'axios';


export default class Safety extends React.Component {
  state = {
    tips: []
  }

  componentDidMount() {
    axios.get(`https://covid19tt.netlify.com/safety.json`)
      .then(res => {
        const tips = res.data;
        this.setState({ tips });
      })
  }

  render() {
    return (<ScrollView bounces={false}>
    <View style={styles.container}>

    {this.state.tips.map((tips, id) => <View key={id} style={{marginBottom: 20}}>
  <Text style={styles.bigEmoji}>{tips.emoji}</Text>
  <Text style={[styles.center, styles.h3]}>{tips.title}</Text>
  <Text style={[styles.center, styles.poptext]}>{tips.description}
  </Text>
  </View>
    )}
    
    </View>
    </ScrollView>);
}}

Safety.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 40,
    alignItems: 'center'
  },
  yes: {
    width: '25%',
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
  },
  bigEmoji: {fontSize: 80, textAlign: 'center'},
  h3: {
  fontSize: 24,
  fontWeight: 'bold'
  },
  center: {
  textAlign: 'center'
  },
  poptext: {
    fontSize: 18,
    paddingVertical: 20
  }
});
