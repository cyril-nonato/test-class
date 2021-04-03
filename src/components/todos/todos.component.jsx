import React from 'react';
import TodoContainer from '../todo/todo.container';
import * as S from './todos.styled';

const TodosComponent = (props) => {
  const { todos } = props;

  return ( 
    <S.Container title="Container">
      {
        todos.length ?
        todos.map(item => {
          return <TodoContainer key={item.id} item={item} />
        }) : null
      }
    </S.Container>
   );
}
 
export default TodosComponent;