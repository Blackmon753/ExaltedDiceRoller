var successes = 0;
var totalRolled = 0;
const allResults = [];

var tenCount = 0;
var nineCount = 0;
var eightCount = 0;
var sevenCount = 0;



function rollDice() {
	return Math.floor(Math.random() * 10) + 1;
}
 
 
 //Just a bunch of functions to check what rules are in place.\/\/\/\/\/ 
function doubleTens(){
	var doubleTens = document.getElementById("doubleTens"); 
	if (doubleTens.checked == true){
		return true;
	}else{
		return false;
	}
	
}

function doubleNines(){
	var doubleNines = document.getElementById("doubleNines"); 
	if (doubleNines.checked == true){
		return true;
	}else{
		return false;
	}
	
}

function doubleEights(){
	var doubleEights = document.getElementById("doubleEights"); 
	if (doubleEights.checked == true){
		return true;
	}else{
		return false;
	}
	
}

function doubleSevens(){
	var doubleSevens = document.getElementById("doubleSevens"); 
	if (doubleSevens.checked == true){
		return true;
	}else{
		return false;
	}
	
}

function failTens(){
	var failTens = document.getElementById("failTens"); 
	if (failTens.checked == true){
		return true;
	}else{
		return false;
	}
	
}

function failNines(){
	var failNines = document.getElementById("failNines"); 
	if (failNines.checked == true){
		return true;
	}else{
		return false;
	}
	
}

function failEights(){
	var failEights = document.getElementById("failEights"); 
	if (failEights.checked == true){
		return true;
	}else{
		return false;
	}
	
}

function failSevens(){
	var failSevens = document.getElementById("failSevens"); 
	if (failSevens.checked == true){
		return true;
	}else{
		return false;
	}
	
}

function failSix(){
	var failSix = document.getElementById("failSix"); 
	if (failSix.checked == true){
		return true;
	}else{
		return false;
	}
	
}

function failFives(){
	var failFives = document.getElementById("failFives"); 
	if (failFives.checked == true){
		return true;
	}else{
		return false;
	}
	
}

function failFours(){
	var failFours = document.getElementById("failFours"); 
	if (failFours.checked == true){
		return true;
	}else{
		return false;
	}
	
}

function failThrees(){
	var failThrees = document.getElementById("failThrees"); 
	if (failThrees.checked == true){
		return true;
	}else{
		return false;
	}
	
}

function failTwos(){
	var failTwos = document.getElementById("failTwos"); 
	if (failTwos.checked == true){
		return true;
	}else{
		return false;
	}
	
}

function failOne(){
	var failOne = document.getElementById("failOne"); 
	if (failOne.checked == true){
		return true;
	}else{
		return false;
	}
	
}

function urgeCheck(){
	var urgeCheck = document.getElementById('urge');
	if (urgeCheck.checked == true){
		return true;
	}else{
		return false;
	}
}

function diceProcessing(result){
	//Ugly as sin but it works.  Should convert this to a switch statement for easier readability.  6 and lower do not have double options since that's not a possibilty as far as I'm aware.  
	
	 if (result == 10 && doubleTens() == true && failTens() == false){
		 successes = (successes + 2);
		 totalRolled = (totalRolled + 1);
		 tenCount = (tenCount + 1)
		 allResults.push("10");
		 
	 }	 else if (result == 10 && doubleTens() == true && failTens() == true){
		 successes = (successes + 2);
		 totalRolled = (totalRolled + 1);
		 allResults.push("10");  //Even if they are rolled until they fail to appear they still count for the purposes of Demiurge so it's important to keep this in.  
		 tenCount = (tenCount + 1)
		 diceProcessing(rollDice());
		 
	 }	else if  (result == 10 && doubleTens() == false && failTens() == false){
		 successes = (successes + 1);
		 totalRolled = (totalRolled + 1);
		 allResults.push("10");
		 tenCount = (tenCount + 1)
	 }	else if  (result == 10 && doubleTens() == false && failTens() == true){
		 successes = (successes + 1);
		 totalRolled = (totalRolled + 1);
		 allResults.push("10");  
		 tenCount = (tenCount + 1)
		 diceProcessing(rollDice());
		 }
	 
	 else if (result == 9 && doubleNines() == true && failNines() == false){
		 successes = (successes + 2);
		 totalRolled = (totalRolled + 1);
		 nineCount = (nineCount + 1);
		 allResults.push("9"); 
		 
	 }	 else if (result == 9 && doubleNines() == true && failNines() == true){
		 successes = (successes + 2);
		 totalRolled = (totalRolled + 1);
		 allResults.push("9");
		 diceProcessing(rollDice());
		 
	 }	else if  (result == 9 && doubleNines() == false && failNines() == false){
		 successes = (successes + 1);
		 totalRolled = (totalRolled + 1);
		 nineCount = (nineCount + 1)
		 allResults.push("9");
	 }	else if  (result == 9 && doubleNines() == false && failNines() == true){
		 successes = (successes + 1);
		 totalRolled = (totalRolled + 1);
		 allResults.push("9");
		 nineCount = (nineCount + 1)
		 diceProcessing(rollDice());
		 }
	
	 else if (result == 8 && doubleEights() == true && failEights() == false){
		 successes = (successes + 2);
		 totalRolled = (totalRolled + 1);
		 eightCount = (eightCount + 1);
		 allResults.push("8"); 
		 
	 }	 else if (result == 8 && doubleEights() == true && failEights() == true){
		 successes = (successes + 2);
		 totalRolled = (totalRolled + 1);
		 allResults.push("8");
		 diceProcessing(rollDice());
		 
	 }	else if  (result == 8 && doubleEights() == false && failEights() == false){
		 successes = (successes + 1);
		 totalRolled = (totalRolled + 1);
		 eightCount = (eightCount + 1)
		 allResults.push("8");
	 }	else if  (result == 8 && doubleEights() == false && failEights() == true){
		 successes = (successes + 1);
		 totalRolled = (totalRolled + 1);
		 allResults.push("8");
		 eightCount = (eightCount + 1)
		 diceProcessing(rollDice());
		 }
	 
	 else if (result == 7 && doubleSevens() == true && failSevens() == false){
		 successes = (successes + 2);
		 totalRolled = (totalRolled + 1);
		 sevenCount = (sevenCount + 1);
		 allResults.push("7"); 
		 
	 }	 else if (result == 7 && doubleSevens() == true && failSevens() == true){
		 successes = (successes + 2);
		 totalRolled = (totalRolled + 1);
		 allResults.push("7");
		 diceProcessing(rollDice());
		 
	 }	else if  (result == 7 && doubleSevens() == false && failSevens() == false){
		 successes = (successes + 1);
		 totalRolled = (totalRolled + 1);
		 sevenCount = (sevenCount + 1)
		 allResults.push("7");
	 }	else if  (result == 7 && doubleSevens() == false && failSevens() == true){
		 successes = (successes + 1);
		 totalRolled = (totalRolled + 1);
		 allResults.push("7");
		 sevenCount = (sevenCount + 1)
		 diceProcessing(rollDice());
		 }
	 
	 else if (result == 6 && failSix() == false){
		 totalRolled = (totalRolled + 1);
		 allResults.push("6"); 
		 
	 }	 else if (result == 6 && failSix() == true){
		 totalRolled = (totalRolled + 1);
		 allResults.push("6");
		 diceProcessing(rollDice());
	 }
	 
	 else if (result == 5 && failFives() == false){
		 totalRolled = (totalRolled + 1);
		 allResults.push("5"); 
		 
	 }	 else if (result == 5 && failFives() == true){
		 totalRolled = (totalRolled + 1);
		 allResults.push("5");
		 diceProcessing(rollDice());
	 }
	 
	 else if (result == 4 && failFours() == false){
		 totalRolled = (totalRolled + 1);
		 allResults.push("4"); 
		 
	 }	 else if (result == 4 && failFours() == true){
		 totalRolled = (totalRolled + 1);
		 allResults.push("4");
		 diceProcessing(rollDice());
	 }
	 
	 else if (result == 3 && failThrees() == false){
		 totalRolled = (totalRolled + 1);
		 allResults.push("3"); 
		 
	 }	 else if (result == 3 && failThrees() == true){
		 totalRolled = (totalRolled + 1);
		 allResults.push("3");
		 diceProcessing(rollDice());
	 }
	 
	 else if (result == 2 && failTwos() == false){
		 totalRolled = (totalRolled + 1);
		 allResults.push("2"); 
		 
	 }	 else if (result == 2 && failTwos() == true){
		 totalRolled = (totalRolled + 1);
		 allResults.push("2");
		 diceProcessing(rollDice());
	 }
	 
	 else if (result == 1 && failOne() == false){
		 totalRolled = (totalRolled + 1);
		 allResults.push("1"); 
		 
	 }	 else if (result == 1 && failOne() == true){
		 totalRolled = (totalRolled + 1);
		 allResults.push("1");
		 diceProcessing(rollDice());
	 }
}

function demiurge(){
	
	allResults.sort(function(a, b){return a - b}); //Sorts by ascending order so the pop/push commands remove the lowest result and then place a new 10 in.
	
	
	//I did this at like 2 am. Could probably done in a prettier way but for this basic function it will do for now. 
	if (urgeCheck() == true){
		
		if (tenCount >= 3){
			allResults.pop();
			allResults.push("10");
			tenCount = (tenCount+1)
			tenCount = tenCount-3;
			if (doubleTens() == true){  //doubleTens will almost always be checked but there are situations where it might not be.  
				successes = (successes + 2);
			}else {
				successes = (successes +1);
			}
			
			diceProcessing(rollDice());
			demiurge();
		}
		
		if (nineCount >= 3){
			allResults.pop();
			allResults.push("10");
			tenCount = (tenCount+1)
			nineCount = nineCount-3;
			if (doubleTens() == true){
				successes = (successes + 2);
			}else {
				successes = (successes +1);
			}
			diceProcessing(rollDice());
			demiurge();
		}
		
		if (eightCount >= 3){
			allResults.pop();
			allResults.push("10");
			tenCount = (tenCount+1)
			eightCount = eightCount-3;
			if (doubleTens() == true){
				successes = (successes + 2);
			}else {
				successes = (successes +1);
			}
			
			diceProcessing(rollDice());
			demiurge();
		}
		
		if (sevenCount >= 3){
			allResults.pop();
			allResults.push("10");
			tenCount = (tenCount+1)
			sevenCount = sevenCount-3;
			if (doubleTens() == true){
				successes = (successes + 2);
			}else {
				successes = (successes +1);
			}
			
			diceProcessing(rollDice());
			demiurge();
		}
		
	}else{
		
	}
	
}


function beginRolls(){
	var dice = document.getElementById('diceAmount').value;
	var i = 0;
	
	successes = 0;
	allResults.length = 0
	totalRolled = 0;
	tenCount = 0;		//Resets all the global variables everytime the button is pressed.
	nineCount = 0;
	eightCount = 0;
	sevenCount = 0;
		
	while (i < dice){
		var x = rollDice()
		diceProcessing(x)
		i++
	}
		
	demiurge();    //I should just do an urge check here instead of calling the demiurge function everytime.  
	
	allResults.sort(function(a, b){return b - a});		//resorts the array of results to descending order for displaying. 
	document.getElementById('successCount').value = successes;
	document.getElementById('results').value = allResults;
	document.getElementById('totalRolls').value = totalRolled;
		
}

