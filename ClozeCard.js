
function ClozeCard(text, cloze) {	

	this.cloze = cloze;	
	this.fullText = text;
	this.partial = this.partial();	

};

ClozeCard.prototype.partial = function() {

	var lowText = this.fullText.toLowerCase();
	var lowCloze = this.cloze.toLowerCase();
	var fulltextArray = this.fullText.split(" ");
	var lowtextArray = lowText.split(" ");
	var lowclozeArray = lowCloze.split(" ");
	var finalText = "";
	var cleanText = "";	
	
	for (var i = 0; i < lowtextArray.length; i++) {
		for (var j = 0; j < lowclozeArray.length; j++) { 
			if (lowtextArray[i] === lowclozeArray[j]) {
				fulltextArray[i] = "...";
			} else if (!lowText.includes(lowclozeArray[j])) {
				return (lowclozeArray[j] + " doesn't appear in " + this.fullText);
			}
		}
	}

	finalText = fulltextArray.join(" ");
	cleanText = finalText.replace("... ...", "...");

	return (cleanText);
	
};

module.exports = ClozeCard;


