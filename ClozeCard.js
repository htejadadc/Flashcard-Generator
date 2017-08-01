
function ClozeCard(text, cloze) {	

	this.cloze = cloze;	
	this.fullText = text;
	this.partial = this.partial();	

};

ClozeCard.prototype.partial = function() {

	var lowText = this.fullText.toLowerCase();
	var lowCloze = this.cloze.toLowerCase();
	var textSwap = this.fullText.replace(this.cloze, "...");
	
	if (!lowText.includes(lowCloze)) {
		return (this.cloze + " doesn't appear in " + this.fullText);
	} else {
		return (textSwap);
	}
}

module.exports = ClozeCard;
