import React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Footer extends React.Component{
	render(){
		return(
			<footer>Najlepsze forum kulinarne, twórcy: Klaudia Cyran oraz Adrian Czupich, Rok: 2019<br/><center><NavLink href="/">Strona główna</NavLink></center></footer>
		);
	}
}