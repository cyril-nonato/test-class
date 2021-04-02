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

    if(todo) {
      createTodo(todo);

      // Resets input value
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