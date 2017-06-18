import styled from 'styled-components';

export const DivRow = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;

  @media screen and (max-width: 768px) {
    &{
      margin-top: 50px;
      margin-bottom: 50px;
    }
  }
`;


export const H2 = styled.h2`
  margin-top: 0px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #0961A5;
  font-weight: 900;
  font-size: 2.5em;

  @media screen and (max-width: 991px) {
    &{
      font-size: 2em;
      text-align: center;
      margin-top: 60px;
      padding-left: 80px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 991px) {
    &{
      margin-top: 80px;
      padding-left: 80px;
    }
  }
`;

export const ImageButton = styled.div`
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
  box-shadow: 40px 40px 1px #023C68;
  z-index: 99;

  & > img{
    -moz-transition: transform 1s;
    -webkit-transition: transform 1s;
    -o-transition: transform 1s;
    transition: transform 1s;
  }

  &:hover {
    & > img{
      transform: scale(1.3);
    }
  }

  @media screen and (max-width: 768px) {
    &{
      margin-top: 40px;
      height: 200px;
      width: 200px;
      box-shadow: 20px 20px 1px #023C68;
    }
  }

`;

export const P1 = styled.p`
  font-size: 1em;
  text-align: justify;
  line-height: 190%;
  
  @media screen and (max-width: 991px) {
    &{
        padding-left: 80px!important;
      }
  }
`;

export const P2 = styled.p`
  font-size: 1em;
  text-align: justify;
  line-height: 190%;
  //padding-right: 10%;

  @media screen and (max-width: 991px) {
    &{
        padding-left: 80px!important;
      }
  }
`;

export const Button = styled.div`
  background-color: transparent;
  font-weight: 800;
  text-align: center;

  a {
    display: inline-block;
    outline: none;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 650;
    font-size: 1.1em;
    padding: 12px 0px;
    cursor: pointer;

  }

  a:before {
    position: absolute;
    padding-left: 5px;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #023C68;
    content: '';
    -webkit-transition: top .4s;
    -moz-transition: top .4s;
    -o-transition: top .4s;
    transition: top .4s;
  }

  a:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    background: #023C68;
    content: '';
    -webkit-transition: height .4s;
    -moz-transition: height .4s;
    -o-transition: top .4s;
    transition: height .4s;
  }

  a:hover:before {
    top: 100%;
    opacity: 1;
  }

  a:hover:after {
    height: 100%;
  }

  @media screen and (max-width: 1080px) {
    &{
      font-size: .75em;
    }
  }


  @media screen and (max-width: 768px) {
    &{
      font-size: .9em;
    }
  }

`;

export const Div = styled.div`
  position: inherit;
  width: 25%;
  margin-top: 22px;

  @media screen and (max-width: 992px) {
    &{
        width: 40%;
        margin-left: 10%;
      }
  }

  @media screen and (min-width: 768px) and (max-width: 768px) {
    &{
      width: 20%;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 992px) {
    &{
      width: 20%;
    }
  }
`;

export const AbDiv = styled.div`
  color: #777;
  background-color: white;
  min-height: 85vh;
  z-index: -10;
`;

