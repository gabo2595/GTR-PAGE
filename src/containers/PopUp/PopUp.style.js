import styled from 'styled-components';

export const DivPopUp = styled.div`

	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.7);
	transition: opacity 500ms;

	display: -webkit-box;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;

	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

  	.popup {
      color: #EEEEEE;
  	  padding: 10px;
      padding-bottom: 20px;
  	  background: #131313;
  	  border-radius: 5px;
  	  width: 32.5%;
  	  position: relative;
  	  transition: all 1s ease-in-out;
  	}

  	.popup h2 {
  	  font-size: 1.8em;
  	  font-weight: 400;
  	  text-align: center;
  	  margin-top: 0;
  	}
  	.popup .close {
  	  position: absolute;
  	  top: 10px;
  	  right: 20px;
  	  transition: all 300ms;
  	  font-size: 30px;
  	  font-weight: bold;
  	  text-decoration: none;
      text-shadow: none;
  	  color: #ffffff;
      opacity: 1;
  	}
  	.popup .close:hover {
  	  color: #0961A5;
  	}
  	.popup .content {
      font-size: 1em;
  	  text-align: center;
  	  max-height: 30%;
  	  overflow: auto;
  	}

  	@media screen and (max-width: 768px){
  	  .popup{
  	    width: 50%;
  	    h2 {
  	  		font-size: 20pt;
  	  	}
  	}



  	@media screen and (max-width: 700px){
  	  .popup{
  	    width: 85%;
  	    h2 {
  	    	font-size: 18pt;
  	    }
  	  }
  	}
`;