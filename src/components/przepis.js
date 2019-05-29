import React from "react";

export default class Przepis extends React.Component{
	render(){
		return(
		<przepis>
			<table border = "4" cellpadding = "10" width="100%">
				<tr><td colspan="2">Przepis:</td></tr>
				<tr><td>Autor:</td><td>Ocena:</td></tr>
				<tr><td colspan="2">Treść</td></tr>
			</table>
		</przepis>
		);
	}
}