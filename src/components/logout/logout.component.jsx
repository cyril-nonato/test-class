import React from 'react'
import * as S from './logout.styled';
const LogoutComponent = (props) => {
  const { signOutRequest } = props;

  return (
    <S.Button onClick={signOutRequest} title="Logout">Logout</S.Button>
   );
}
 
export default LogoutComponent;