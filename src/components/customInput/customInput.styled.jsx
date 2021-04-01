import styled from 'styled-components';

export const FormContainer = styled.form`
  margin-top: 25px;
  width: 60%;
  display: grid;
  grid-template-columns: 85% 15%;
  box-sizing: border-box;
`;

export const Input = styled.input`
  padding: 10px 20px;
  font-size: 16px;
  outline: none;
  border-radius: 3px;
  border: 2px solid #d3d3d3;
  background-color: #e2e2e2;
`;

export const Button = styled.button`
  border-radius: 3px;
  background-color: #3267f8;
  color: #fff;
  border: none;
  margin-left: 10px;
  outline: none;

  :active {
    transform: translateY(1px);
  }
`;