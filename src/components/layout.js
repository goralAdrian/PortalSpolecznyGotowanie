import React from "react";
import Header from "./header";
import Footer from "./footer";
import Loguj from "./loguj";
import Strona from "./stronaGlowna";
import Panel from "./panelLogowania";
import Podforum from "./podforum";
import Obiad from "./obiady";
import Deser from "./desery";
import Sorowka from "./surowki";
import Ciasta from "./ciasta";
import Przepis from "./przepis";
import Profil from "./profil";
import Rejestracja from "./rejestracja";
import Paneladmina from "./panelAdmina";

import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from "react-router-dom"

var mysql = require('mysql');

export default class Layout extends React.Component{

	  
	render(){
		return(
			<div>
				<Header/>
				Witaj na naszym forum kulinarnym. W naszym forum każdy łasuch znajdzie coś dla siebie.
				<Panel/>
				
				<Router>
					<Route path="/" exact strict render={
						()=> {
							return (<Strona/>);
						}
					}/>
					<Route path="/obiady" exact strict render={
						()=> {
							return (<Obiad/>);
						}
					}/>
					<Route path="/desery" exact strict render={
						()=> {
							return (<Deser/>);
						}
					}/>
					<Route path="/sorowki" exact strict render={
						()=> {
							return (<Sorowka/>);
						}
					}/>
					<Route path="/ciasta" exact strict render={
						()=> {
							return (<Ciasta/>);
						}
					}/>
					<Route path="/profil" exact strict render={
						()=> {
							return (<Profil/>);
						}
					}/>
					<Route path="/przepis" exact strict render={
						()=> {
							return (<Przepis/>);
						}
					}/>
					<Route path="/loguj" exact strict render={
						()=> {
							return (<Loguj/>);
						}
					}/>
					<Route path="/rejestracja" exact strict render={
						()=> {
							return (<Rejestracja/>);
						}
					}/>
					<Route path="/panelAdmina" exact strict render={
						()=> {
							return (<Paneladmina/>);
						}
					}/>
				</Router>
				<Footer/>
			</div>
			
			)
	}
}