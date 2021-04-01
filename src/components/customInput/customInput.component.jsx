import React, { Component } from 'react';
import * as S from './customInput.styled';

class CustomInputComponent extends Component {
  state = {
    todo: ""
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { createTodo } = this.props;

    const { todo } = this.state;

    // Checks if todo has value
    if(todo) {
      createTodo(todo)
      this.setState({
        todo: ""
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      todo: e.target.value
    })
  }

  render() {

    const { todo } = this.state;

    return (
      <S.FormContainer onSubmit={this.handleSubmit}>
        <S.Input value={todo} onChange={this.handleChange} />
          <S.Button type="submit">Add</S.Button>
      </S.FormContainer>
    )
  }
};

export default CustomInputComponent;