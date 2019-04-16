/* Lab4.js */

"use strict";
let JSONCars = [

	{"regnr" : "AAA111", "fabrikat" : "Volvo", "modell" : "V70", "mil" : "1000"},
	{"regnr" : "BBB222", "fabrikat" : "Saab", "modell" : "95", "mil" : "2000"},
	{"regnr" : "CCC333", "fabrikat" : "Audi", "modell" : "A4", "mil" : "3000"},
	{"regnr" : "DDD444", "fabrikat" : "Fiat", "modell" : "Freemont", "mil" : "4000"},
	{"regnr" : "EEE555", "fabrikat" : "Skoda", "modell" : "Octavia", "mil" : "5000"},
	{"regnr" : "FFF666", "fabrikat" : "Mazda", "modell" : "6", "mil" : "6000"},
	{"regnr" : "GGG777", "fabrikat" : "Kia", "modell" : "Optima", "mil" : "7000"},
	{"regnr" : "HHH888", "fabrikat" : "Honda", "modell" : "Civic", "mil" : "8000"},
	{"regnr" : "III999", "fabrikat" : "Suzuki", "modell" : "Swift", "mil" : "9000"}

];	//array som innehåller flera JSONobjekt.

//när sidan laddas
window.addEventListener('load',function() {
	createTable();
	createTableHead(JSONCars.length, JSONCars);
	createTableRow(JSONCars.length, JSONCars);

});

function createTable() {
	//skapar tabellen
	let table = document.createElement("table");
	//addar klasserna till tabellen.
	table.classList.add("table");
	table.classList.add("table-striped");
	table.classList.add("table-hover");
	//tabellen placeras i klassen container-fluid.
	let contain = document.querySelector(".container-fluid");
	contain.appendChild(table);
	}

function createTableHead(inTrRef, inJSONObject) {
	//Hjälper till att hitta table
	let tabell = document.getElementsByClassName("table")[0];
	//Här skapar vi själva table head och lägger då till det i tabellen (table)
	let tHead = document.createElement("thead");
	tabell.appendChild(tHead);


	//samma som i tidigare kommentar. Skapar table row och lägger till det i table head
	let tr = document.createElement("tr");
	tHead.appendChild(tr);
	//nyckel och värde. stoppar in värdet och väljer från inJSONObject på plats 0.
	let array = Object.keys(inJSONObject[0]);

	//loopar igenom arrayen
	for(let i = 0; i < array.length; i++){
		let th = document.createElement("th");
		let textRef = document.createTextNode(array[i]);
		th.appendChild(textRef);
	}
}

function createTableRow(inTrRef, inJSONObject) {
	//här hittar den själva tabellen
	let table = document.getElementsByClassName("table")[0];
	//skapar här en body och skickas in i tabellen
	let body = document.createElement("tBody");
	table.appendChild(body);

	//loopar igenom JSONObject
	for(let i = 0; i < inTrRef; i++){
		let tr = document.createElement("tr");
		body.appendChild(tr);

		//nyckel och värde. stoppar in värdet och väljer från inJSONObject på plats i.
		let object = Object.values(inJSONObject[i]);

		//loopar igenom td och td läggs in i tr.
		for(let j=0; j<object.length; j++){
			let td = document.createElement("td");
			tr.appendChild(td);

			//lägger in data i html
			let textRef = document.createTextNode(object[j]);
			td.appendChild(textRef);
		}
	}
}
