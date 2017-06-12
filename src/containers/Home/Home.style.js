import styled from 'styled-components';

export const SpanR = styled.span`
  position: absolute;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  bottom: -16px;
  left: -14px;
  opacity: .5;
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