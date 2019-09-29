import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { store } from "./redux";
import Todos from "./Todos";
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ paddingTop: 25 }}>
          <Todos />
        </View>
      </Provider>
    );
  }
}

export default App;
