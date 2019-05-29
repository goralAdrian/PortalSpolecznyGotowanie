import React from "react";

export default class Profil extends React.Component{
	render(){
		return(
		<profil>
			<center>
				<table border = "4" cellpadding = "10" width="50%">
					<tr><td width="50%">Nazwa użytkownika:</td><td></td></tr>
					<tr><td>Zalogowany:</td><td></td></tr>
					<tr><td>Przepisów:</td><td></td></tr>
					<tr><td>Komentarzy:</td><td></td></tr>
				</table>
			</center>
		</profil>
		);
	}
}