import styled from 'styled-components';

export const A = styled.a`
	text-decoration: none;
	-webkit-transition: all .2s linear;
	-moz-transition: all .2s linear;
	-ms-transition: all .2s linear;
	-o-transition:  all .2s linear;
	transition: all .2s linear;
	cursor: pointer;
`;

export const Clear = styled.div`
	clear: both;
`;

export const Ftr = styled.footer`
	background-color: #2E3639;
	position: relative;
	z-index: 51;
`;

export const Splitter = styled.div`
	background-color:  #0066ff;
	background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(.25, rgba(255, 255, 255, .2)), color-stop(.25, transparent),
	color-stop(.5, transparent), color-stop(.5, rgba(255, 255, 255, .2)),
	color-stop(.75, rgba(255, 255, 255, .2)), color-stop(.75, transparent),
	to(transparent));
	background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
	transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
	transparent 75%, transparent);
	background-image: -moz-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
	transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
	transparent 75%, transparent);
	background-image: -ms-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
	transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
	transparent 75%, transparent);
	background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
	transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
	transparent 75%, transparent);
	background-image: linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
	transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
	transparent 75%, transparent);
	-webkit-background-size: 50px 50px;
	-moz-background-size: 50px 50px;
	background-size: 50px 50px;
	-moz-box-shadow: 1px 1px 8px gray;
	-webkit-box-shadow: 1px 1px 8px gray;
	box-shadow: 1px 1px 8px gray;
	height: 5px;
`;

export const Ul = styled.ul`
	list-style: none outside none;
	margin: 0 auto;
	max-width: 1200px;
	overflow: hidden;
	padding: 25px 0;
	position: relative;
	width: 95%;

	li{
		float: left;
		padding: 20px 15px;
		width: 33.3%;
		box-sizing:border-box;
		-webkit-box-sizing:border-box;
		-moz-box-sizing:border-box;
	}

	li:first-child {
		padding-left: 0;
	}

	li:nth-child(3) {
		padding-right: 0;
	}
`;

export const Icon = styled.div`
	color: #999999;
	float: left;
	font-size: 80px;
	line-height: 80px;
`;

export const TextDiv = styled.div`
	color: #848889;
	font-size: 13px;
	line-height: 20px;
	margin-left: 105px;
	position: relative;
	text-align: justify;

	h4 {
		color: #FFFFFF;
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	a {
		border-bottom: 1px dotted transparent;
		color: #FFDD00;
		font-weight: bold;
	}

	a:hover {
		border-color: #FFDD00;
	}
`;

export const BarDiv = styled.div`
	background-color: #1E2629;
	padding: 20px 0
`;

export const BarWrap = styled.div`
	font-size: 12px;
	margin: 0 auto;
	max-width: 1200px;
	position: relative;
	width: 95%;
`;

export const LinksDiv = styled.div`
	float: left;
	list-style: none outside none;
	position: relative;

	li {
		float: left;
		margin-right: 10px;
	}

	a {
		color: #778888;
	}

	a:hover {
		color: #0961A5;
	}
`;

export const Social = styled.div`
	position: absolute;
	right: 0;
	top: 5px;

	A {
		color: #778888;
		margin-left: 20px;
	}

	A:hover {
		color: #0961A5;
		span{
			-webkit-transform: rotate(360deg);
			-moz-transform: rotate(360deg);
			-ms-transform: rotate(360deg);
			-o-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

`;

export const SpanIcon = styled.span`
	display: inline-block;
	font-size: 25px;
	margin-right: 5px;
	vertical-align: middle;
	-webkit-transition: -webkit-transform .3s linear;
	-moz-transition: -moz-transform .3s linear;
	-ms-transition: -ms-transform .3s linear;
	-o-transition:  -o-transform .3s linear;
	transition: transform .3s linear;
`;
export const SpanInfo = styled.span`
	display: inline-block;
	vertical-align: middle;
`;

export const SpanFollow = styled.span`
	display: block;
`;

export const CopyRDiv = styled.div`
	color: #778888;
	margin-top: 10px;
`;