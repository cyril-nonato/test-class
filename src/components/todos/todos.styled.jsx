import styled from 'styled-components';

export const Container = styled.ul`
  margin: 0;
  margin-top: 20px;
  width: 60%; 
  padding: 0;

  li:first-child {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  li {
    border-top: 1px solid #d3d3d3;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
  }

  li:last-child {
    border-bottom: 1px solid #d3d3d3;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;
