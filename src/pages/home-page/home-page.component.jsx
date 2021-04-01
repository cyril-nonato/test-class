import React from 'react';
import { Redirect } from 'react-router-dom';
import CustomInputContainer from '../../components/customInput/customInput.container';
import LogoutContainer from '../../components/logout/logout.container';
import TodosContainer from '../../components/todos/todos.container';
import * as S from './home-page.styled';

const HomePage = (props) => {
  const { authenticated, auth } = props;

  // Prevents access to home page if user is not logged in
  if(!authenticated) {
    return <Redirect to="/login" />
  };
  console.log('a')
  return ( 
    <S.Container>

      <S.InnerContainer>

        <S.NameAndLogout>

          {/* Name */}
          <S.Name>
            {
              `${auth.username}'s to do list`
            }
          </S.Name>

          {/* Logout button */}
          <S.ButtonContainer>

            <LogoutContainer />

          </S.ButtonContainer>
          
        </S.NameAndLogout>

        {/* Input field */}
        <CustomInputContainer />

        {/* Todos List */}
        <TodosContainer />

      </S.InnerContainer>


    </S.Container>
   );
}
 
export default HomePage;