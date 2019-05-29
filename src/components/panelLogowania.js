import React from "react";
import debug from 'debug';
import { Nav, NavItem, NavLink } from 'reactstrap';

var bgColor = {"Silver": "#C0C0C0"};

export default class Panel extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
		<panel>
				<center>
					<table width="100%">
						<tr a style={{backgroundColor: bgColor.Silver}}><td><NavLink href="/profil">Profil</NavLink></td><td><NavLink href="/loguj">Zaloguj się</NavLink></td><td><NavLink href="/wyloguj">Wyloguj się</NavLink></td><td><NavLink href="/rejestracja">Rejestracja</NavLink></td></tr>
					</table>
					<br/>
					<NavLink href="/panelAdmina">Panel admina</NavLink>
				</center>
		</panel>
		);
	}
}