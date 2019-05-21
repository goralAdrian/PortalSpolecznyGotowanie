import React from "react";

export default class Profil extends React.Component{
	render(){
		
		var user: "uzytkownik";
		var zarejestrowany: "2019-01-02";
		var post = "20";
		var miejscowosc = "Rzeszow";
		
		return(
		<profil>
			Nazwa użytkownika: {user}<br/>
			Zarejestrowany: {zarejestrowany}<br/>
			Postów: {post}<br/>
			Miejscowość: {miejscowosc}<br/>
		</profil>
		);
	}
}