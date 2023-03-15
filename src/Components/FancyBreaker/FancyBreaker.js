import React from 'react'
import "./FancyBreaker.css";

const FancyBreaker = props => {
	return (
		<div className="breaker f_flex">
			<p className="breaker_text uppercase">{props.text}</p>
		</div>
	)
}

export default FancyBreaker;