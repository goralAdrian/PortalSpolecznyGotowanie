import React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Loguj extends React.Component{
	render(){
		return(
			<loguj>
			<center>
				<form>
					<label>Login:
						<input type="text" name="login"/>
					</label>
					<br/>
					<label>Hasło:
						<input type="password" name="haslo"/>
					</label>
					<br/>
					<input type="submit" value="Submit"/>
				</form>
			</center>
			</loguj>
		);
	}
}