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

        @media only screen and (max-device-width: 768px) {
    		&{
    			h1{
    				font-size: 2em;
    			}

    			h3{
    				font-size: 1.6em;
    			}
        	}
        }

        @media only screen and (max-device-width: 767px) {
    		&{
    			h1{
    				font-size: 1.8em;
    				padding-left: 15px;
    				padding-right: 15px;
    			}

    			h3{
    				padding-right: 15px;
    				font-size: 1.4em;
    			}
    		}
    	}
	}
	
`;