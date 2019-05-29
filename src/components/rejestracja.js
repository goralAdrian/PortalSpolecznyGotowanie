import React, { Component } from 'react';

export default class Rejestracja extends React.Component {
  render() {
    return (
      <rejestracja>
		<form>
		<center>
			<label>Login:
				<br/>
				<input type="text" name="login"/>
			</label>
			<br/>
			<label>Hasło:
				<br/>
				<input type="password" name="haslo"/>
			</label>
			<br/>
			<label>Powtórz hasło:
				<br/>
				<input type="password" name="haslo2"/>
			</label>
			<br/>
			<input type="submit" value="Submit"/>
			</center>
		</form>
      </rejestracja>
    );
  }
}
