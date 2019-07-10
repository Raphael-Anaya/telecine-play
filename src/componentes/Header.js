import React from 'react';
import Logo from './header/Logo';
import Title from './header/Title';
import Button from './header/Button';

export default class Header extends React.Component{
	render(){
		return(
			<div className='header'>
				<Logo/>
				<Title/>
				<Button/>
			</div>
		)
	}
}