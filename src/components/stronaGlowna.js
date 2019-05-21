import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Strona extends React.Component{
	render(){
		var wartosc1 = "0";
		var wartosc2 = "0";
		var wartosc3 = "0";
		var wartosc4 = "0";
		return(
		<strona>
				<br/>
				<b>PRZEPISY</b>
				<table border = "4" cellpadding = "10" width="100%">
					<tr><td width="50%"><b>DZIAŁ</b></td><td><b width="50%">LICZBA POSTÓW</b></td></tr>
					<tr><td><NavLink href="/obiady">OBIADY</NavLink></td><td>{wartosc1}</td></tr>
					<tr><td><NavLink href="/desery">DESERY</NavLink></td><td>{wartosc2}</td></tr>
					<tr><td><NavLink href="/sorowki">SURÓWKI</NavLink></td><td>{wartosc3}</td></tr>
					<tr><td><NavLink href="/ciasta">CIASTA</NavLink></td><td>{wartosc4}</td></tr>
					
					
				</table>
				
				<hr/>
				<b>PORADY</b>
				<table border = "4" cellpadding = "10" width="100%">
					<tr><td width="50%"><b>DZIAŁ</b></td><td width="50%"><b>LICZBA POSTÓW</b></td></tr>
					<tr><td></td><td></td></tr>
					<tr><td></td><td></td></tr>
					<tr><td></td><td></td></tr>
					<tr><td></td><td></td></tr>
				</table>
				
				<hr/>
				<b>SPRZĘT</b>
				<table border = "4" cellpadding = "10" width="100%">
					<tr><td width="50%"><b>DZIAŁ</b></td><td width="50%"><b>LICZBA POSTÓW</b></td></tr>
					<tr><td></td><td></td></tr>
					<tr><td></td><td></td></tr>
					<tr><td></td><td></td></tr>
					<tr><td></td><td></td></tr>
				</table>
			</strona>
		);
	}
}