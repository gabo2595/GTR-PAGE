import styled from 'styled-components';

export const SpanR = styled.span`
  -moz-transition: all ease-in-out .3s;
  -webkit-transition: all ease-in-out .3s;
  -o-transition: all ease-in-out .3s;
  transition: all ease-in-out .3s;
  font-size: 28px;
  color: white;
  font-weight: 800;
  background-color: transparent;
  padding: 4px;
  border-radius: 5px;
  &:hover{
    background-color: #003067;
  }
`;

export const DivArrow = styled.div`
  @media only screen and (min-width : 768px){
    &.leftControl{margin-top: 50%;}
    &.rightControl{margin-top: 50%;}
  }
`;