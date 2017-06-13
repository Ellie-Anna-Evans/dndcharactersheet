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
		var newVal = parseInt(skill.children[0].textContent);
		newVal -= 2;
		skill.children[0].textContent = newVal;
		return;
	} else{
		skill.classList.add('toggled');
		var newVal = parseInt(skill.children[0].textContent);
		newVal += 2;
		skill.children[0].textContent = newVal;
		return;
	}
}

function setSkills(){
	var skillList = document.getElementById('skills').children;
	var statList = document.getElementsByClassName('stats')[0].children;
	for (var i = 0; i < skillList.length; i++){
		switch(skillList[i].children[1].classList.item(1)){
			case 'str':
				skillList[i].children[0].textContent = statList[0].getElementsByClassName('mod').textContent;
				break;
			case 'dex':
				skillList[i].children[0].textContent = statList[1].getElementsByClassName('mod').textContent;
				break;
			case 'con':
				skillList[i].children[0].textContent = statList[2].getElementsByClassName('mod').textContent;
				break;
			case 'intl':
				skillList[i].children[0].textContent = statList[3].getElementsByClassName('mod').textContent;
				break;
			case 'wis':
				skillList[i].children[0].textContent = statList[4].getElementsByClassName('mod').textContent;
				break;
			case 'cha':
				skillList[i].children[0].textContent = statList[5].getElementsByClassName('mod').textContent;
				break;
		}
	}
}

function setSaveThrow(){
	var throwList = document.getElementById('throws').children;
	var statList = document.getElementsByClassName('stats')[0].children;
	for (var i = 0; i < 6; i++){
		throwList[i].children[0].textContent = statList[i].getElementsByClassName('mod').textContent;
	}	
}

/*function setSpellDC(charClass){
	
}*/

/*function setCharInfo(){
	var name = document.getElementById('name');
	name = 
}*/

window.addEventListener('DOMContentLoaded', function() {
	
	var incrementButtons = document.getElementsByClassName('increment-stat-button');
	for (var i = 0; i < incrementButtons.length; i++){
		incrementButtons[i].addEventListener('click', function(event){
			incrementStat(event.target.parentNode);
			setSaveThrow();
			setSkills();
		});
	}
	
	var decrementButtons = document.getElementsByClassName('decrement-stat-button');
	for (var i = 0; i < decrementButtons.length; i++){
		decrementButtons[i].addEventListener('click', function(event){
			decrementStat(event.target.parentNode);
			setSaveThrow();
			setSkills();
		});
	}
	
	setSaveThrow();
	setSkills();
	
	var toggleButtons = document.getElementsByClassName('toggle-proficiency');
	for (var i = 0; i < toggleButtons.length; i++){
		toggleButtons[i].addEventListener('click', function(event){
			toggleProf(event.target.parentNode);
		});
	}
	
});

