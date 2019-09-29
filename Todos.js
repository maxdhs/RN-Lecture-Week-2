import React from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";

class Todos extends React.Component {
  state = {
    todo: ""
  };

  handleSubmit = () => {
    this.props.addTodo(this.state.todo);
  };

  render() {
    return (
      <View>
        {this.props.todos.map(todo => (
          <Text key={todo.id}>{todo.description}</Text>
        ))}
        <Input
          placeholder="Enter a todo.."
          value={this.state.todo}
          onChangeText={value => {
            this.setState({
              todo: value
            });
          }}
        />
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => {
    dispatch({ type: "ADD_TODO", payload: todo });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
