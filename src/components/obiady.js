import React from "react";
import { Button } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Obiad extends React.Component{
	render(){
		return(
		<obiad>
			Jesteś na stronie z przepisami na obiady. Przepisy są tworzone przez użytkowników.
			<table border = "4" cellpadding = "10" width="100%">
				<tr>
					<td width="50%"><b>Przepis</b></td>
					<td width="25%"><b>Użytkownik</b></td>
					<td width="25%"><b>Ocena</b></td>
				</tr>
				<tr>
					<td><b><NavLink href="/przepis">Przepis</NavLink></b></td>
					<td><b></b></td>
					<td><b></b></td>
				</tr>
				<tr>
					<td><b></b></td>
					<td><b></b></td>
					<td><b></b></td>
				</tr>
			</table>
		</obiad>
		);
	}
}