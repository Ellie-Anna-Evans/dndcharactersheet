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
		setSaveThrow();
		setSkills();
		return;
	}else{
		skill.classList.add('toggled');
		setSaveThrow();
		setSkills();
		return;
	}
}

function setSkills(){
	var skillList = document.getElementById('skills').children;
	var statList = document.getElementsByClassName('stats')[0].children;
	for (var i = 0; i < skillList.length; i++){
		switch(skillList[i].children[1].classList.item(1)){
			case 'str':
				skillList[i].children[0].textContent = parseInt(statList[0].children[3].textContent);
				if(skillList[i].classList.item(1) === 'toggled'){ skillList[i].children[0].textContent = parseInt(skillList[i].children[0].textContent) + 2};
				break;
			case 'dex':
				skillList[i].children[0].textContent = parseInt(statList[1].children[3].textContent);
				if(skillList[i].classList.item(1) === 'toggled'){ skillList[i].children[0].textContent = parseInt(skillList[i].children[0].textContent) + 2};
				break;
			case 'con':
				skillList[i].children[0].textContent = parseInt(statList[2].children[3].textContent);
				if(skillList[i].classList.item(1) === 'toggled'){ skillList[i].children[0].textContent = parseInt(skillList[i].children[0].textContent) + 2};
				break;
			case 'intl':
				skillList[i].children[0].textContent = parseInt(statList[3].children[3].textContent);
				if(skillList[i].classList.item(1) === 'toggled'){ skillList[i].children[0].textContent = parseInt(skillList[i].children[0].textContent) + 2};
				break;
			case 'wis':
				skillList[i].children[0].textContent = parseInt(statList[4].children[3].textContent);
				if(skillList[i].classList.item(1) === 'toggled'){ skillList[i].children[0].textContent = parseInt(skillList[i].children[0].textContent) + 2};
				break;
			case 'cha':
				skillList[i].children[0].textContent = parseInt(statList[5].children[3].textContent);
				if(skillList[i].classList.item(1) === 'toggled'){ skillList[i].children[0].textContent = parseInt(skillList[i].children[0].textContent) + 2};
				break;
		}
	}
}

function setSaveThrow(){
	var throwList = document.getElementById('throws').children;
	var statList = document.getElementsByClassName('stats')[0].children;
	for (var i = 0; i < 6; i++){
		throwList[i].children[0].textContent = statList[i].children[3].textContent;
		if(throwList[i].classList.item(1) === 'toggled'){ throwList[i].children[0].textContent = parseInt(throwList[i].children[0].textContent) + 2};
	}
}
/* Spell Save DC = 8 + proficiency bonus + spellcasting ability modifier */
function setSpellDC(charClass){
	var profBonus = parseInt(document.getElementById('profStat').textContent);
	if((charClass === 'bard') || (charClass === 'paladin') || (charClass === 'sorcerer') || (charClass === 'warlock')){
		var spellMod = parseInt(document.getElementsByClassName('charisma')[0].children[3].textContent);
		document.getElementById('spellDCStat').textContent = 8 + profBonus + spellMod;
	} else if((charClass === 'cleric') || (charClass === 'druid') || (charClass === 'ranger')){
		var spellMod = parseInt(document.getElementsByClassName('wisdom')[0].children[3].textContent);
		document.getElementById('spellDCStat').textContent = 8 + profBonus + spellMod;
	} else if((charClass === 'fighter') || (charClass === 'rogue') || (charClass === 'wizard')){
		var spellMod = parseInt(document.getElementsByClassName('intelligence')[0].children[3].textContent);
		document.getElementById('spellDCStat').textContent = 8 + profBonus + spellMod;
	} else{
		document.getElementById('spellDCStat').textContent = 0;
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
	var profBonus = parseInt(document.getElementById('profStat').textContent);
	if((charClass === 'bard') || (charClass === 'paladin') || (charClass === 'sorcerer') || (charClass === 'warlock')){
		var spellMod = parseInt(document.getElementsByClassName('charisma')[0].children[3].textContent);
		document.getElementById('spellAtkBonusStat').textContent = profBonus + spellMod;
	} else if((charClass === 'cleric') || (charClass === 'druid') || (charClass === 'ranger')){
		var spellMod = parseInt(document.getElementsByClassName('wisdom')[0].children[3].textContent);
		document.getElementById('spellAtkBonusStat').textContent = profBonus + spellMod;
	} else if((charClass === 'fighter') || (charClass === 'rogue') || (charClass === 'wizard')){
		var spellMod = parseInt(document.getElementsByClassName('intelligence')[0].children[3].textContent);
		document.getElementById('spellAtkBonusStat').textContent = profBonus + spellMod;
	} else{
		document.getElementById('spellAtkBonusStat').textContent = 0;
	}
}


function clearInputValues() {

  document.getElementById('name').value = '';
  document.getElementById('level').value = '';
  document.getElementById('class').value = '';
  document.getElementById('race').value = '';
  document.getElementById('background').value = '';
  document.getElementById('alignment').value = '';

}


function postReq(){
	
	var charInfo = [document.getElementById('name').value, document.getElementById('level').value, document.getElementById('class').value, document.getElementById('race').value, document.getElementById('background').value, document.getElementById('alignment').value, document.getElementById('profStat').textContent]

	var stats = document.getElementsByClassName('stats')[0].children;
	var statInfo = [];
	for (var i = 0; i < stats.length; i++){
		statInfo.push(stats[i].children[1].textContent);
		statInfo.push(stats[i].children[3].textContent);
	}
	
	var sthrows = document.getElementById('throws');
	var sthrowData = [];
	for (var i = 0; i < sthrows.children.length; i++){
		sthrowData.push(sthrows.children[i].children[0].textContent);
		if(sthrows.children[i].classList.contains('toggled')){
			sthrowData.push('X');
		} 
		if (!(sthrows.children[i].classList.contains('toggled'))){
			sthrowData.push('O');
		}
	}
	
	var skills = document.getElementById('skills');
	var skillData = [];
	for (var i = 0; i < skills.children.length; i++){
		skillData.push(skills.children[i].children[0].textContent);
		if(skills.children[i].classList.contains('toggled')){
			skillData.push('X');
		}
		if (!(skills.children[i].classList.contains('toggled'))){
			skillData.push('O');
		}
	}
	
	var spellData = [document.getElementById('spellDCStat').textContent, document.getElementById('spellAtkBonusStat').textContent]
	
	saveCSheet(charInfo, statInfo, sthrowData, skillData, spellData, function(err){
		if(err){
			return;
		}
	});
	
}


function saveCSheet(charInfo, statInfo, sthrowData, skillData, spellData, callback){
	
	var postURL = "/create-sheet/addSheet";
	
	var postRequest = new XMLHttpRequest();
	postRequest.open('POST', postURL);
	postRequest.setRequestHeader('Content-Type', 'application/json');
	
	postRequest.addEventListener('load', function(event){
		var error;
		if (event.target.status !== 200){
			error = event.target.response;
		}
		callback(error);
	});
	
	var postBody = {
		name: charInfo[0],
		level: charInfo[1],
		class: charInfo[2],
		race: charInfo[3],
		background: charInfo[4],
		alignment: charInfo[5],
		proficiency: charInfo[6],
		str: statInfo[0],strmod: statInfo[1],
		dex: statInfo[2],dexmod: statInfo[3],
		con: statInfo[4],conmod: statInfo[5],
		intl: statInfo[6],intlmod: statInfo[7],
		wis: statInfo[8],wismod: statInfo[9],
		cha: statInfo[10],chamod: statInfo[11],
		strthrow: sthrowData[0],strprof: sthrowData[1],
		dexthrow: sthrowData[2],dexprof: sthrowData[3],
		conthrow: sthrowData[4],conprof: sthrowData[5],
		intlthrow: sthrowData[6],intlprof: sthrowData[7],
		wisthrow: sthrowData[8],wisprof: sthrowData[9],
		chathrow: sthrowData[10],chaprof: sthrowData[11],
		acrobatics: skillData[0],acrobaticsProf: skillData[1],
		animalHandling: skillData[2],animalHandlingProf: skillData[3],
		arcana: skillData[4],arcanaProf: skillData[5],
		athletics: skillData[6],athleticProf: skillData[7],
		deception: skillData[8],deceptionProf: skillData[9],
		history: skillData[10],historyProf: skillData[11],
		insight: skillData[12],insightProf: skillData[13],
		intimidation: skillData[14],intimidationProf: skillData[15],
		investigation: skillData[16],investigationProf: skillData[17],
		medicine: skillData[18],medicineProf: skillData[19],
		nature: skillData[20],natureProf: skillData[21],
		perception: skillData[22],perceptionProf: skillData[23],
		performance: skillData[24],performanceProf: skillData[25],
		persuasion: skillData[26],persuasionProf: skillData[27],
		religion: skillData[28],religionProf: skillData[29],
		sleightOfHand: skillData[30],sleightOfHandProf: skillData[31],
		stealth: skillData[32],stealthProf: skillData[33],
		survival: skillData[34],survivalProf: skillData[35],
		spellDC: spellData[0],
		spellAtkBonus: spellData[1]
	}
	postRequest.send(JSON.stringify(postBody));
}


window.addEventListener('DOMContentLoaded', function() {
	
	clearInputValues();
	
	var incrementButtons = document.getElementsByClassName('increment-stat-button');
	for (var i = 0; i < incrementButtons.length; i++){
		incrementButtons[i].addEventListener('click', function(event){
			incrementStat(event.target.parentNode);
			setSaveThrow();
			setSkills();
			setSpellAtkBonus(classValue);
			setSpellDC(classValue);
		});
	}
	
	var decrementButtons = document.getElementsByClassName('decrement-stat-button');
	for (var i = 0; i < decrementButtons.length; i++){
		decrementButtons[i].addEventListener('click', function(event){
			decrementStat(event.target.parentNode);
			setSaveThrow();
			setSkills();
			setSpellAtkBonus(classValue);
			setSpellDC(classValue);
		});
	}
	
	setSaveThrow();
	setSkills();
	
	var classOption = document.getElementById('class');
	var raceOption = document.getElementById('race');
	var backOption = document.getElementById('background');
	var alignOption = document.getElementById('alignment');
	var classValue;
	
	classOption.addEventListener('change', function(event){
		setSpellAtkBonus(event.target.value);
		setSpellDC(event.target.value);
		classValue = event.target.value;
	});
	
	var toggleButtons = document.getElementsByClassName('toggle-proficiency');
	for (var i = 0; i < toggleButtons.length; i++){
		toggleButtons[i].addEventListener('click', function(event){
			toggleProf(event.target.parentNode);
		});
	}
	
	var saveButton = document.getElementById('save-button');
	saveButton.addEventListener('click', function(){
		postReq();
	});
	
});

