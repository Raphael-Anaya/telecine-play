import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componentes/App';
import Formulario from './componentes/Formulario';

import {BrowserRouter, Switch, Route} from 'react-router-dom'; 

ReactDOM.render(
	
	<BrowserRouter>
		<Switch>
			<Route path="/"exact={true} component={App}/>
			<Route path="/Formulario"exact={true} component={Formulario}/>
		</Switch>
	</BrowserRouter>,

	document.getElementById('root')
)