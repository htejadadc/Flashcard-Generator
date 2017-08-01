
function ClozeCard(text, cloze) {	

	this.cloze = cloze;	
	this.fullText = text;
	this.partial = this.partial();	

};

ClozeCard.prototype.partial = function() {

	var lowText = this.fullText.toLowerCase();
	var lowCloze = this.cloze.toLowerCase();
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 566efe9f06e92368a4710f474510ab630fd2eec4
	var fulltextArray = this.fullText.split(" ");
	var lowtextArray = lowText.split(" ");
	var lowclozeArray = lowCloze.split(" ");
	var finalText = "";
	var cleanText = "";	
<<<<<<< HEAD
	
	for (var i = 0; i < lowtextArray.length; i++) {
		for (var j = 0; j < lowclozeArray.length; j++) { 
			if (lowtextArray[i] === lowclozeArray[j]) {
				fulltextArray[i] = "...";
			} else if (!lowText.includes(lowclozeArray[j])) {
				return (lowclozeArray[j] + " doesn't appear in " + this.fullText);
			}
		}
=======
	var textSwap = this.fullText.replace(this.cloze, "...");
	
	if (!lowText.includes(lowCloze)) {
		return (this.cloze + " doesn't appear in " + this.fullText);
	} else {
		return (textSwap);
>>>>>>> 7216034ae185ffd82a1d3a30b2f08de1ff6d2baf
=======
	
	for (var i = 0; i < lowtextArray.length; i++) {
		for (var j = 0; j < lowclozeArray.length; j++) { 
			if (lowtextArray[i] === lowclozeArray[j]) {
				fulltextArray[i] = "...";
			} else if (!lowText.includes(lowclozeArray[j])) {
				return (lowclozeArray[j] + " doesn't appear in " + this.fullText);
			}
		}
>>>>>>> 566efe9f06e92368a4710f474510ab630fd2eec4
	}
	
	finalText = fulltextArray.join(" ");
	cleanText = finalText.replace("... ...", "...")

	return (cleanText);
	
};

module.exports = ClozeCard;


