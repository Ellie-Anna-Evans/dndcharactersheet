var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var homePageData = require('./homePageData');
var cSheetData = require('./cSheetData');
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.get('/', function(req, res, next){
	
  var templateArgs = {
	links: homePageData
  };

  res.render('homePage', templateArgs);
});

app.get('/create-sheet', function(req, res, next){
	res.render('createCSheet');
});

app.get('/csheet/:index', function(req, res, next){
	console.log("== url params for request:", req.params);
	console.log(cSheetData.length);
	
	if(req.params.index < cSheetData.length){
		var templateArgs = {
			name: req.body.name,
			level: req.body.level,
			class: req.body.class,
			race: req.body.race,
			background: req.body.background,
			alignment: req.body.alignment,
			proficiency: req.body.proficiency,
			str: req.body.str,strmod: req.body.strmod,
			dex: req.body.dex,dexmod: req.body.dexmod,
			con: req.body.con,conmod: req.body.conmod,
			intl: req.body.intl,intlmod: req.body.intlmod,
			wis: req.body.wis,wismod: req.body.wismod,
			cha: req.body.cha,chamod: req.body.chamod,
			strthrow: req.body.strthrow,strprof: req.body.strprof,
			dexthrow: req.body.dexthrow,dexprof: req.body.dexprof,
			conthrow: req.body.conthrow,conprof: req.body.conprof,
			intlthrow: req.body.intlthrow,intlprof: req.body.intlthrow,
			wisthrow: req.body.wisthrow,wisprof: req.body.wisprof,
			chathrow: req.body.chathrow,chaprof: req.body.chaprof,
			acrobatics: req.body.acrobatics,acrobaticsProf: req.body.acrobaticsProf,
			animalHandling: req.body.animalHandling,animalHandlingProf: req.body.animalHandlingProf,
			arcana: req.body.arcana,arcanaProf: req.body.arcanaProf,
			athletics: req.body.athletics,athleticProf: req.body.athleticProf,
			deception: req.body.deception,deceptionProf: req.body.deceptionProf,
			history: req.body.history,historyProf: req.body.historyProf,
			insight: req.body.insight,insightProf: req.body.insightProf,
			intimidation: req.body.intimidation,intimidationProf: req.body.intimidationProf,
			investigation: req.body.investigation,investigationProf: req.body.investigationProf,
			medicine: req.body.medicine,medicineProf: req.body.medicineProf,
			nature: req.body.nature,natureProf: req.body.natureProf,
			perception: req.body.perception,perceptionProf: req.body.perceptionProf,
			performance: req.body.performance,performanceProf: req.body.performanceProf,
			persuasion: req.body.persuasion,persuasionProf: req.body.persuasionProf,
			religion: req.body.religion,religionProf: req.body.religionProf,
			sleightOfHand: req.body.sleightOfHand,sleightOfHandProf: req.body.sleightOfHandProf,
			stealth: req.body.stealth,stealthProf: req.body.stealthProf,
			survival: req.body.survival,survivalProf: req.body.survivalProf,
			spellDC: req.body.spellDC,
			spellAtkBonus: req.body.spellAtkBonus
		}
		res.render('cSheet', templateArgs);
	} else {
		next();
	}
});

app.post('/create-sheet/addSheet', function(req, res, next){

	var data = {
		name: req.body.name,
		level: req.body.level,
		class: req.body.class,
		race: req.body.race,
		background: req.body.background,
		alignment: req.body.alignment,
		proficiency: req.body.proficiency,
		str: req.body.str,strmod: req.body.strmod,
		dex: req.body.dex,dexmod: req.body.dexmod,
		con: req.body.con,conmod: req.body.conmod,
		intl: req.body.intl,intlmod: req.body.intlmod,
		wis: req.body.wis,wismod: req.body.wismod,
		cha: req.body.cha,chamod: req.body.chamod,
		strthrow: req.body.strthrow,strprof: req.body.strprof,
		dexthrow: req.body.dexthrow,dexprof: req.body.dexprof,
		conthrow: req.body.conthrow,conprof: req.body.conprof,
		intlthrow: req.body.intlthrow,intlprof: req.body.intlthrow,
		wisthrow: req.body.wisthrow,wisprof: req.body.wisprof,
		chathrow: req.body.chathrow,chaprof: req.body.chaprof,
		acrobatics: req.body.acrobatics,acrobaticsProf: req.body.acrobaticsProf,
		animalHandling: req.body.animalHandling,animalHandlingProf: req.body.animalHandlingProf,
		arcana: req.body.arcana,arcanaProf: req.body.arcanaProf,
		athletics: req.body.athletics,athleticProf: req.body.athleticProf,
		deception: req.body.deception,deceptionProf: req.body.deceptionProf,
		history: req.body.history,historyProf: req.body.historyProf,
		insight: req.body.insight,insightProf: req.body.insightProf,
		intimidation: req.body.intimidation,intimidationProf: req.body.intimidationProf,
		investigation: req.body.investigation,investigationProf: req.body.investigationProf,
		medicine: req.body.medicine,medicineProf: req.body.medicineProf,
		nature: req.body.nature,natureProf: req.body.natureProf,
		perception: req.body.perception,perceptionProf: req.body.perceptionProf,
		performance: req.body.performance,performanceProf: req.body.performanceProf,
		persuasion: req.body.persuasion,persuasionProf: req.body.persuasionProf,
		religion: req.body.religion,religionProf: req.body.religionProf,
		sleightOfHand: req.body.sleightOfHand,sleightOfHandProf: req.body.sleightOfHandProf,
		stealth: req.body.stealth,stealthProf: req.body.stealthProf,
		survival: req.body.survival,survivalProf: req.body.survivalProf,
		spellDC: req.body.spellDC,
		spellAtkBonus: req.body.spellAtkBonus
	}

	cSheetData.push(data);
	
	fs.writeFile('cSheetData.json', JSON.stringify(cSheetData), function(err){
		if (err) {
          res.status(500).send("Unable to save sheet to database");
        } else {
          res.status(200).send();
}
	});
	
	var homeData = {
		link: "/csheet/" + (cSheetData.length-1),
		text: data.name || 'empty'
	}
	
	homePageData.push(homeData);
	fs.writeFile('homePageData.json', JSON.stringify(homePageData), function(err){
		if (err) {
          res.status(500).send("Unable to add sheet to homepage");
        } else {
          res.status(200).send();
}
	});

});

app.get('/style.css', function(req, res, next){
	res.status(200).sendFile(path.join(__dirname, 'public', 'style.css'));
});

app.get('/index.js', function(req, res, next){
	res.status(200).sendFile(path.join(__dirname, 'public', 'index.js'));
});

app.get('*', function(req, res, next){
	res.status(404).render('404Page');
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function () {
  console.log("== Server listening on port", port);
});