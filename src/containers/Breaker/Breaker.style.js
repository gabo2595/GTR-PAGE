import styled from 'styled-components';

export const DivContainer = styled.div`
	#breakimg{
		background-image: url(${require('assets/bkg4-s.jpg')});
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		height: 300px;

		color: #EEEEEE;

		display: flex;
	    flex-direction: row;
	    flex-wrap: wrap;
	    justify-content: center;
	    align-items: center;

	    @media only screen and (max-device-width: 1024px) {
    	&{
        	background-attachment: scroll;
        }
	}
	}
	
`;