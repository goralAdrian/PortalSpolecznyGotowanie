import React from "react";

export default class Podforum extends React.Component{
	render(){
		//const file = require("./text.txt");
		return(
		<podforum>
			<br/>
			<table border = "4" cellpadding = "10" width="100%">
				<tr><td>Dział: </td><td>Temat: </td><td>Autor: </td><td>Ocena: </td></tr>
				<tr><td colspan="4"></td></tr>
			</table>
		</podforum>
		);
	}
}