import React from "react";

export default class Przepis extends React.Component{
	render(){
		return(
		<przepis>
			<table border = "4" cellpadding = "10" width="100%">
				<tr><td colspan="2">Przepis: x</td></tr>
				<tr><td>Autor: x</td><td>Ocena: x</td></tr>
				<tr><td colspan="2">Treść</td></tr>
			</table>
		</przepis>
		);
	}
}