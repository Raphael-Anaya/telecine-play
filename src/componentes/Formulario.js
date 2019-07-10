import React from 'react';
import Logo from './header/Logo';
import Cadastro from './form-cadastro/Cadastro';
import Rodape from './footer/Rodape'

export default class Formulario extends React.Component{
	render(){
		return(
			<div className='formulario'>
				<Logo/>
				<Cadastro/>
				<Rodape/>
			</div>
		)
	}
}