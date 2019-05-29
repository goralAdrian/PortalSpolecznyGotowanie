import React from "react";
import { Button } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Paneladmina extends React.Component{
	render(){
		return(
		<paneladmina>
			Witaj nasz drogi Administratorze, guru kulinarne! Tutaj możesz zarządzać forum - dodawać, usuwać użytkowników, jak i zarządzać postami użytkowników.
			<br/>
			Administracja użytkownikami
			<table>
				<tr><td>Nazwa użytkownika</td><td>Liczba postów</td><td>Usuń użytkownika</td></tr>
				<tr><td></td><td></td><td></td></tr>
				<tr><td></td><td></td><td></td></tr>
				<tr><td></td><td></td><td></td></tr>
				<tr><td></td><td></td><td></td></tr>
				<tr><td></td><td></td><td></td></tr>
				<tr><td></td><td></td><td></td></tr>
				<tr><td></td><td></td><td></td></tr>
				<tr><td></td><td></td><td></td></tr>
				<tr><td></td><td></td><td></td></tr>
				<tr><td></td><td></td><td></td></tr>
			</table>
		</paneladmina>
		);
	}
}