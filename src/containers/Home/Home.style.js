import styled from 'styled-components';

export const SpanR = styled.span`
  opacity: .4;
  -moz-transition: opacity ease-in-out .3s;
  -webkit-transition: opacity ease-in-out .3s;
  -o-transition: opacity ease-in-out .3s;
  transition: opacity ease-in-out .3s;

  &:hover{
    opacity: 1;
  }
`;

export const DivArrow = styled.div`
  @media only screen and (min-width : 768px){
    &.leftControl{margin-top: 50%;}
    &.rightControl{margin-top: 50%;}
  }
`;