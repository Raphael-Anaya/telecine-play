import React from 'react'
import {Link} from 'react-router-dom'

export default class Button extends React.Component{
	render(){
		return(
			<div className="botao-chamada">
				<Link to="/formulario" className="link-form">Experimente grátis</Link>
			</div>
		)
	}
}