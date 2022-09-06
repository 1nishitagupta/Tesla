import React from 'react'
import Fade from 'react-reveal/Fade';




	function Section(props) {

	  	
	  	const bg = {
	  		backgroundImage: `url('tesla images/${props.backgroundImg}')`,
	  		backgroundRepeat: 'no-repeat',
	  		backgroundAttachment: 'scroll',
	  		backgroundPosition: 'center',
	  		backgroundSize: 'cover'
	  	}

	return (
		<div className="section" style = {bg} id={props.aref}>
			<div className="carName">
				<h1>{props.name}</h1>
				<p>{props.tagline}</p>
			</div>
			<div className="cta">
				<div className="buttons">
					<a href="" >{props.leftBtn}</a>
					{
						props.rightBtn && <a href="">{props.rightBtn}</a>
					}
					
				</div>
				{
					props.arrow && <img src="tesla images/down-arrow.svg" alt="" />
				}
			</div>
		</div>
	)
}

export default Section