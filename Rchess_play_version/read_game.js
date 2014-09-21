// JavaScript Document
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// List of top level grandmaster games having all the moves of the game are made available in the games.xml file.
// this file reads one game at a time from the games.xml file. The game is then executed and results/values obtained
// are used to improve parameter values.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ // 

var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");

function verify()
{
	alert("game");
	// 0 Object is not initialized
	// 1 Loading object is loading data
	// 2 Loaded object has loaded data
	// 3 Data from object can be worked with
	// 4 Object completely initialized
	if (xmlDoc.readyState != 4)
	{
		return false;
	}
}

function loadXML(xmlFile)
{													
    alert("xmlDoc.async");														// xmlDoc.async="false";
	xmlDoc.onreadystatechange=verify;
    xmlDoc.load(xmlFile);
	xmlObj=xmlDoc.documentElement;
}

function read_xml(board)														 
{
	var game=new Array;
	var result=new Array;
	loadXML('games.xml');
	for(var i=0; i<27; i++)
	{
		game[i]=xmlObj.childNodes(i).firstChild.text;
		result[i]=xmlObj.childNodes(i).getAttribute("result");
		notation_format( board , game[i]);
	}
}
