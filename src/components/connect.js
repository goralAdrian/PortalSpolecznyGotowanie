var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "baza_danych_prof_koziol"
});

con.connect(function(err){
	if (err) throw err;
	con.query("Select * From uzytkownicy", function (err, result, fields){
		if (err) throw err;
		console.log(result);
});
});