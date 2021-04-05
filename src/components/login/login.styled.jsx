import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const InnerContainer = styled.div`
  height: 30vh;
  width: 40vh;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  font-size: 16px;
  padding: 10px 15px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #858585;

  ::placeholder {
    opacity: .8;
  }
`;

export const Button = styled.button`
  background-color: #3267f8;
  outline: none;
  border: none;
  padding: 15px;
  font-size: 16px;
  color: #fff;
  border-radius: 3px;
  :active {
    transform: translateY(1px);
  }
`;

export const Error = styled.p`
  padding: 15px;
  font-size: 16px;
  background-color: #ffd3d3;
  color: #e62828;
  /* font-weight: bold; */
`