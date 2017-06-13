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
	var skillList = document.getElementById('skills').childNodes;
	var statList = document.getElementsByClassName('stats')[0].childNodes;
	for (var i = 0; i < skillList.length; i++){
		switch(skillList[i].classList.item(1)){
			str:
				skillList[i].firstChild.textContent = statList[0].getElementsByClassName('mod').textContent;
				break;
			dex:
				skillList[i].firstChild.textContent = statList[1].getElementsByClassName('mod').textContent;
				break;
			con:
				skillList[i].firstChild.textContent = statList[2].getElementsByClassName('mod').textContent;
				break;
			intl:
				skillList[i].firstChild.textContent = statList[3].getElementsByClassName('mod').textContent;
				break;
			wis:
				skillList[i].firstChild.textContent = statList[4].getElementsByClassName('mod').textContent;
				break;
			cha:
				skillList[i].firstChild.textContent = statList[5].getElementsByClassName('mod').textContent;
				break;
		}
	}
}

function setSaveThrow(){
	var throwList = document.getElementById('throws').childNodes;
	var statList = document.getElementsByClassName('stats')[0].childNodes;
	for (var i = 0; i < 6; i++){
		throwList[i].firstChild.textContent = statList[i].getElementsByClassName('mod').textContent;
	}	
}
/* Spell Save DC = 8 + proficiency bonus + spellcasting ability modifier */
/*function setSpellDC(charClass){
	
}*/
/*	Spellcasting abilities per class
	Barbarian: N/A
	Bard: charisma
	Cleric: wisdom
	Druid: wisdom
	Fighter: intelligence
	Monk: N/A
	Paladin: charisma
	Ranger: wisdom
	Rogue: intelligence
	Sorcerer: charisma
	Warlock: charisma
	Wizard: intelligence
*/
/* Spell Attack Bonus = proficiency bonus + spellcasting ability modifier*/
/*function setSpellAtkBonus(charClass){
	
}
*/
function setCharInfo(){
	var name = document.getElementById('name');
	name = 
}

