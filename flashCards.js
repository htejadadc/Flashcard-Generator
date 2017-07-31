
var basicCard = require("./BasicCard.js");
var clozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");

var newCard = function() {
	inquirer.prompt([
		{
			type: "input",
			message: "Enter Front of the Basic Card:",				
			name: "front"		
		},
		{
			type: "input",
			message: "Enter Back of the Basic Card:",				
			name: "back"	
		},
		{
			type: "input",
			message: "Enter Card Full Text:",				
			name: "full"		
		},
		{
			type: "input",
			message: "Enter Card Cloze Deletion:",				
			name: "cloze"	
		}

	]).then(function(flashcardEntry) {

		var firstPresident = new basicCard(flashcardEntry.front, flashcardEntry.back);
		var firstPresidentCloze = new clozeCard(flashcardEntry.full, flashcardEntry.cloze);
		console.log(firstPresident.front);
		console.log(firstPresident.back);
		console.log(firstPresidentCloze.cloze);
		console.log(firstPresidentCloze.partial);
		console.log(firstPresidentCloze.fullText);
	});
};

newCard();

