import React , {useState} from 'react'
import Fade from 'react-reveal/Fade';
import styled from 'styled-components'
// import Navbar from 'react-bootstrap/Navbar';

function Header() {

	const [Show, setShow] = useState(false);
	const Menustyle = {
		flexDirection: "column",
    	position: "fixed",
    	backgroundColor: "#fff",
    	padding: "75px  40px",
    	top: "0",
    	right: "-20%",
    	width: "20%",
    	height: "100vh",
    	justifyContent: "flex-start",
    	alignItems: "flex-start",
		right: `${ Show ? "0%" : "-20%" }`
		
	}

	return (
		<Fade down>
		<TopHead>
			<div className="container">
				<Navbar>
					<Fade left>
						<div className="header-logo">
							<Logo src='tesla images/logo.svg' alt='Logo' />
						</div>
					</Fade>
					<ul className="d-flex">
						<li><a href="#s" >Model S</a></li>
						<li><a href="#3" >Model 3</a></li>
						<li><a href="#x" >Model X</a></li>
						<li><a href="#y" >Model Y</a></li>
						<li><a href="#sr" >Solar Roofs</a></li>
						<li><a href="#sp" >Solar Pannels</a></li>
					</ul>
					<ul className="d-flex">
						<li><a href="" >Shop</a></li>
						<li><a href="" >Account</a></li>
						<li onClick={() => setShow(true)}><a href="#">Menu</a></li>
					</ul>
				</Navbar>
				<Fade right>
				<ul className="d-flex dropdown" style = {Menustyle}>
						<li className="cross" onClick={() => setShow(false)}>&times;</li>
						<li><a href="" >Model S</a></li>
						<li><a href="" >Model 3</a></li>
						<li><a href="" >Model X</a></li>
						<li><a href="" >Model Y</a></li>
						<li><a href="" >Solar Roofs</a></li>
						<li><a href="" >Solar Pannels</a></li>
						<li><a href="" >Existing Inventory</a></li>
						<li><a href="" >Used Inventory</a></li>
						<li><a href="" >Test Drive</a></li>
						<li><a href="" >Powerwall</a></li>
						<li><a href="" >Commercial Energy</a></li>
				</ul>
				</Fade>

			</div>
		</TopHead>
		</Fade>
	)
}


const TopHead = styled.div`
	position: fixed;
	width: 100%;
	height: 60px;
	padding: 1rem 2rem;
`

const Navbar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Logo = styled.img``



export default Header


// useEffect - Netflix

// Routing - react-router-dom

// ContextAPI

// DefaultProps

// Redux





