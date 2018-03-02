import styled from 'styled-components';

export const DivArrow = styled.div`
	display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    border-radius: 3px;
    background-color: rgba(0, 48, 103, .7);
    z-index: 98;
    position: fixed;
    bottom: 33px;
    right: 20px;
    width: 25px;
    height: 25px;
    text-align: center;

    &:hover{
    	background-color: rgba(0, 48, 103, 1);
    }

    @media screen and (max-width: 768px){
    	bottom: 25px;
        right: 25px;
    }

    @media screen and (max-width: 436px){
    	opacity: .6;
    	bottom: 35px;
        right: 10px;
    }
`;

export const SpanArrow = styled.span`
	color: white;
	font-size: 15px;
	padding-bottom: 1px;
`;