function randomize(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}   //Code Obtained on mozilla developer website

function calcMod(stat, val){
	var mod = stat.getElementsByClassName('mod')[0];
	mod = (val-10)/2;
	stat.getElementsByClassName('mod')[0].textContent = mod;
}

function randomButton(type, stat){
	var statField = stat.getElementsByClassName('stat')[0];
	statField.createTextNode(randomize(0, type));
	calcMod(stat, statField.textContent);
}

function incrementStat(stat){
	var statFieldValue = stat.getElementsByClassName('stat')[0].textContent;
	statFieldValue+=1;
	stat.getElementsByClassName('stat')[0].textContent = statFieldValue;
	calcMod(stat, statFieldValue
}

function decrementStat(stat){
	var statFieldValue = stat.getElementsByClassName('stat')[0].textContent;
	statFieldValue-=1;
	stat.getElementsByClassName('stat')[0].textContent = statFieldValue;
}

function toggleProf(skill){
	if(skill.classList.contains('toggled')){
		skill.classList.remove('toggled');
		var newVal = skill.firstChild.textContent;
		newVal -= 2;
		skill.firstChild.textContent = newVal;
	} else{
		skill.classList.add('toggled');
		var newVal = skill.firstChild.textContent;
		newVal += 2;
		skill.firstChild.textContent = newVal;
	}
}

function setSkills(){
	var skillList = document.getElementById('skills');
	for (var i = 0; i < skillList.length; i++){
		
	}
}

/*function setSpellDC(charClass){
	
}*/

function setCharInfo(){
	var name = document.getElementById('name');
	name = 
}

