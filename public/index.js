function randomize(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}   //Code Obtained on mozilla developer website

function calcMod(stat, val){
	var mod = stat.getElementsByClassName('mod')[0];
	mod = Math.floor((val-10)/2);
	stat.getElementsByClassName('mod')[0].textContent = mod;
}

function randomButton(type, stat){
	var statField = stat.getElementsByClassName('stat')[0];
	statField.createTextNode(randomize(0, type));
	calcMod(stat, statField.textContent);
}

function incrementStat(stat){
	var statFieldValue = parseInt(stat.getElementsByClassName('stat')[0].textContent);
	statFieldValue+=1;
	stat.getElementsByClassName('stat')[0].textContent = statFieldValue;
	calcMod(stat, statFieldValue);
}

function decrementStat(stat){
	var statFieldValue = parseInt(stat.getElementsByClassName('stat')[0].textContent);
	statFieldValue-=1;
	stat.getElementsByClassName('stat')[0].textContent = statFieldValue;
	calcMod(stat, statFieldValue);
}

function toggleProf(skill){
	if(skill.classList.contains('toggled')){
		skill.classList.remove('toggled');
		console.log(skill.firstChild.textContent);
		var newVal = parseInt(skill.firstChild.textContent);
		newVal -= 2;
		skill.firstChild.textContent = newVal;
	} else{
		skill.classList.add('toggled');
		console.log(skill.firstChild.textContent);
		var newVal = parseInt(skill.firstChild.textContent);
		newVal += 2;
		skill.firstChild.textContent = newVal;
	}
}

function setSkills(){
	var skillList = document.getElementById('skills').childNodes;
	var statList = document.getElementsByClassName('stats')[0].childNodes;
	for (var i = 0; i < skillList.length; i++){
		switch(skillList[i].classList.item(1)){
			case 'str':
				skillList[i].firstChild.textContent = statList[0].getElementsByClassName('mod').textContent;
				break;
			case 'dex':
				skillList[i].firstChild.textContent = statList[1].getElementsByClassName('mod').textContent;
				break;
			case 'con':
				skillList[i].firstChild.textContent = statList[2].getElementsByClassName('mod').textContent;
				break;
			case 'intl':
				skillList[i].firstChild.textContent = statList[3].getElementsByClassName('mod').textContent;
				break;
			case 'wis':
				skillList[i].firstChild.textContent = statList[4].getElementsByClassName('mod').textContent;
				break;
			case 'cha':
				skillList[i].firstChild.textContent = statList[5].getElementsByClassName('mod').textContent;
				break;
			default:
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
function setSpellDC(charClass){
	var spellSaveDC = document.getElementById('spellDCStat');
	var profBonus = parseInt(document.getElementById('profStat'));
	if(charClass === bard || charClass === paladin || charClass === sorcerer || charClass === warlock){
		var spellMod = parseInt(document.getElementsByClassName('charisma')[0].children[2].textContent);
		spellSaveDC = 8 + profBonus + spellMod;
	}
	else if(charClass === cleric || charClass === druid charClass || charClass === ranger){
		var spellMod = parseInt(document.getElementsByClassName('wisdom')[0].children[2].textContent);
		spellSaveDC = 8 + profBonus + spellMod;
	}
	else if(charClass === fighter || charClass === rogue || charClass === wizard){
		var spellMod = parseInt(document.getElementsByClassName('intelligence')[0].children[2].textContent);
		spellSaveDC = 8 + profBonus + spellMod;
	}
	else{
		spellSaveDC = 0;
	}
}
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
function setSpellAtkBonus(charClass){
	var spellAtk = document.getElementById('spellAtkBonusStat');
	var profBonus = parseInt(document.getElementById('profStat'));
	if(charClass === bard || charClass === paladin || charClass === sorcerer || charClass === warlock){
		var spellMod = parseInt(document.getElementsByClassName('charisma')[0].children[2].textContent);
		spellAtk = profBonus + spellMod;
	}
	else if(charClass === cleric || charClass === druid || charClass === ranger){
		var spellMod = parseInt(document.getElementsByClassName('wisdom')[0].children[2].textContent);
		spellAtk = profBonus + spellMod;
	}
	else if(charClass === fighter || charClass === rogue || charClass === wizard){
		var spellMod = parseInt(document.getElementsByClassName('intelligence')[0].children[2].textContent);
		spellAtk = profBonus + spellMod;
	}
	else{
		spellAtk = 0;
	}
}


/*function setCharInfo(){
	var name = document.getElementById('name');
	name = 
}*/

window.addEventListener('DOMContentLoaded', function() {
	
	var incrementButtons = document.getElementsByClassName('increment-stat-button');
	for (var i = 0; i < incrementButtons.length; i++){
		incrementButtons[i].addEventListener('click', function(event){
			incrementStat(event.target.parentNode);
		});
	}
	
	var decrementButtons = document.getElementsByClassName('decrement-stat-button');
	for (var i = 0; i < decrementButtons.length; i++){
		decrementButtons[i].addEventListener('click', function(event){
			decrementStat(event.target.parentNode);
		});
	}
	
	/*setSaveThrow();
	setSkills();*/
	
	var toggleButtons = document.getElementsByClassName('toggle-proficiency');
	for (var i = 0; i < toggleButtons.length; i++){
		toggleButtons[i].addEventListener('click', function(event){
			toggleProf(event.target.parentNode);
		});
	}
	
});

