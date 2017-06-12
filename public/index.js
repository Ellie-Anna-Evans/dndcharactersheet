function randomize(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}   //Code Obtained on mozilla developer website

function randomButton(type, stat){
	var statField = stat.getElementsByClassName('stat');
	statField.createTextNode(randomize(0, type));
}

function incrementStat(stat){
	var statFieldValue = stat.getElementsByClassName('stat').textContent;
	statFieldValue+=1;
}

function decrementStat(stat){
	var statFieldValue = stat.getElementsByClassName('stat').textContent;
	statFieldValue-=1;
}
