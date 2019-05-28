import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
interface IHomeProps { }
interface IHomeState { }
export default class App extends React.Component<IHomeProps, IHomeState> {
  render() {
    return (

      <View style={styles.RedWrapper}>
        <View style={styles.BlackWrapper}>
          <View style={styles.container}>
            <Text style={styles.textStyle}>#crushingit</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  BlackWrapper: {
    flex: 1,
    backgroundColor: "black",
    padding: 20
  },
  RedWrapper: {
    flex: 1,
    backgroundColor: "red",
    padding: 20
  },
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: "AvenirNextCondensed",
    backgroundColor: "red",
    color: "white",
    fontSize: 40
  }
});
