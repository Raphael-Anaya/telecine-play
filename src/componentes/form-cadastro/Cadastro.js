import React from 'react'
import InputMask from 'react-input-mask';

export default class Cadastro extends React.Component{
	render(){
		return(
<div className="formulario">
                <h1>Para começar a usar os seus 7 dias grátis, precisamos de alguns dados</h1>
                <form name="form1" id="form1" method="post" action="/controllers/controllerForm.php">
                    <input type="text" name="nome" id="nome" placeholder="NOME" autofocus/>
                    <input type="email" name="email" id="email" placeholder="E-MAIL"/>                    
                    <input type="text" class="form-control cpf-mask" placeholder="CPF"/>
                    <input type="text" class="form-control" data-mask="00/00/0000" placeholder="DATA DE NASCIMENTO"/>   

                    <input type="text" list="cidades" autocomplete="on" placeholder="ESTADO"/ >
					<datalist id="cidades">
					  <option value="Brasília"/>
					  <option value="Rio de Janeiro"/>
					  <option value="São Paulo"/>
					</datalist> 

                    <input type="text" list="cidades" autocomplete="on" placeholder="CIDADE"/ >
					<datalist id="cidades">
					  <option value="Brasília"/>
					  <option value="Rio de Janeiro"/>
					  <option value="São Paulo"/>
					</datalist>  
                    <input type="submit" value="Enviar meus dados"/>
                </form>
            </div>
		)
	}
}