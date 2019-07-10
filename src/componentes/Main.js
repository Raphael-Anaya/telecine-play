import React from 'react'
import Slide from './main/Slide'
import CatalogsSection from './main/CatalogsSection'

export default class Main extends React.Component{
	render(){
		return(
			<div className='main'>
				<Slide/>
				<CatalogsSection/>
			</div>
		)
	}
}