import React, { Component } from 'react'
import * as S from './todo.styled';

class TodoComponent extends Component {

  state = {
    showButton: false
  }

  handleDelete = () => {
    const { deleteTodo, item } = this.props;

    deleteTodo(item.id)
  }

  render() {
    const { item } = this.props;

    const { showButton } = this.state;

    return (
      <S.Container title="TodoContainer"
        onMouseEnter={(e) => {
          this.setState({showButton: true})
        }}

        onMouseLeave={(e) => {
          this.setState({showButton: false})
        }}
      >
        <span title="Span">
          {
            item.name
          }
        </span>
        {
          showButton ?
          <S.ButtonContainer title="ButtonContainer">
            <S.Button
              onClick={this.handleDelete}
            >
                Delete
            </S.Button>
          </S.ButtonContainer>
           : null
        }
      </S.Container>
    )
  }
}

export default TodoComponent;