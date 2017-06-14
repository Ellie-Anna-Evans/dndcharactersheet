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
  console.log("== url params for request:", req.params);
	
  var templateArgs = {
	links: homePageData
  };

  res.render('homePage', templateArgs);
});

app.get('/create-sheet', function(req, res, next){
	console.log("== url params for request:", req.params);
	res.render('createCSheet');
});

app.get('/csheet/:index', function(req, res, next){
	console.log("== url params for request:", req.params);
	app.use(express.static(path.join(__dirname, 'public')));
	
	if(req.params.index < cSheetData.length){
		var templateArgs = {
			name: cSheetData[req.params.index].name,
			level: cSheetData[req.params.index].level,
			class: cSheetData[req.params.index].class,
			race: cSheetData[req.params.index].race,
			background: cSheetData[req.params.index].background,
			alignment: cSheetData[req.params.index].alignment,
			proficiency: cSheetData[req.params.index].proficiency,
			str: cSheetData[req.params.index].str,strmod: cSheetData[req.params.index].strmod,
			dex: cSheetData[req.params.index].dex,dexmod: cSheetData[req.params.index].dexmod,
			con: cSheetData[req.params.index].con,conmod: cSheetData[req.params.index].conmod,
			intl: cSheetData[req.params.index].intl,intlmod: cSheetData[req.params.index].intlmod,
			wis: cSheetData[req.params.index].wis,wismod: cSheetData[req.params.index].wismod,
			cha: cSheetData[req.params.index].cha,chamod: cSheetData[req.params.index].chamod,
			strthrow: cSheetData[req.params.index].strthrow,strprof: cSheetData[req.params.index].strprof,
			dexthrow: cSheetData[req.params.index].dexthrow,dexprof: cSheetData[req.params.index].dexprof,
			conthrow: cSheetData[req.params.index].conthrow,conprof: cSheetData[req.params.index].conprof,
			intlthrow: cSheetData[req.params.index].intlthrow,intlprof: cSheetData[req.params.index].intlthrow,
			wisthrow: cSheetData[req.params.index].wisthrow,wisprof: cSheetData[req.params.index].wisprof,
			chathrow: cSheetData[req.params.index].chathrow,chaprof: cSheetData[req.params.index].chaprof,
			acrobatics: cSheetData[req.params.index].acrobatics,acrobaticsProf: cSheetData[req.params.index].acrobaticsProf,
			animalHandling: cSheetData[req.params.index].animalHandling,animalHandlingProf: cSheetData[req.params.index].animalHandlingProf,
			arcana: cSheetData[req.params.index].arcana,arcanaProf: cSheetData[req.params.index].arcanaProf,
			athletics: cSheetData[req.params.index].athletics,athleticProf: cSheetData[req.params.index].athleticProf,
			deception: cSheetData[req.params.index].deception,deceptionProf: cSheetData[req.params.index].deceptionProf,
			history: cSheetData[req.params.index].history,historyProf: cSheetData[req.params.index].historyProf,
			insight: cSheetData[req.params.index].insight,insightProf: cSheetData[req.params.index].insightProf,
			intimidation: cSheetData[req.params.index].intimidation,intimidationProf: cSheetData[req.params.index].intimidationProf,
			investigation: cSheetData[req.params.index].investigation,investigationProf: cSheetData[req.params.index].investigationProf,
			medicine: cSheetData[req.params.index].medicine,medicineProf: cSheetData[req.params.index].medicineProf,
			nature: cSheetData[req.params.index].nature,natureProf: cSheetData[req.params.index].natureProf,
			perception: cSheetData[req.params.index].perception,perceptionProf: cSheetData[req.params.index].perceptionProf,
			performance: cSheetData[req.params.index].performance,performanceProf: cSheetData[req.params.index].performanceProf,
			persuasion: cSheetData[req.params.index].persuasion,persuasionProf: cSheetData[req.params.index].persuasionProf,
			religion: cSheetData[req.params.index].religion,religionProf: cSheetData[req.params.index].religionProf,
			sleightOfHand: cSheetData[req.params.index].sleightOfHand,sleightOfHandProf: cSheetData[req.params.index].sleightOfHandProf,
			stealth: cSheetData[req.params.index].stealth,stealthProf: cSheetData[req.params.index].stealthProf,
			survival: cSheetData[req.params.index].survival,survivalProf: cSheetData[req.params.index].survivalProf,
			spellDC: cSheetData[req.params.index].spellDC,
			spellAtkBonus: cSheetData[req.params.index].spellAtkBonus
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