import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 10px;
  position: relative;
  /* width: 100%; */
  height: 40px;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  right: 10px;
`

export const Button = styled.button`
  padding: 8px 20px;
  border: none;
  outline: none;
  background-color: red;
  border-radius: 3px;
  color: #fff;

  :active {
    transform: translateY(1px);
  }
`
