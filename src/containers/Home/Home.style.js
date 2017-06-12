import styled from 'styled-components';

export const SpanR = styled.span`
  position: absolute;
  margin-bottom: 7px;
  left: 3px;
  opacity: .4;
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