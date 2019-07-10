import React from 'react'

export default class Slide extends React.Component{
	render(){
		return(
			<section className="slide-carousel">
		        <marquee behavior="alternate" onMouseOver="this.stop()" onMouseOut="this.start()">
		          <img src="/img/a-escala.jpg"/>
		          <img src="/img/arranha-ceu.jpg"/>
		          <img src="/img/forma-dagua.jpg"/>
		          <img src="/img/guerra-secreta.jpg"/>
		          <img src="/img/o-passageiro.jpg"/>
		          <img src="/img/quase-dupla.jpg"/>
		          <img src="/img/rei-show.jpg"/>
		          <img src="/img/star-wars.jpg"/>
		          <img src="/img/thor-ragnarok.jpg"/>
		          <img src="/img/tr-origem.jpg"/>
		          <img src="/img/tres-anuncios-crime.jpg"/>
		          <img src="/img/verdade-desafio.jpg"/>
		        </marquee>
    		</section>
		)
	}
}