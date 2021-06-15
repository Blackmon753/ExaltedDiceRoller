var successes = 0;
var totalRolled = 0;
const allResults = [];

function rollDice() {
	return Math.floor(Math.random() * 10) + 1;
}

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

function diceProcessing(result){
	var tenCount = 0;
	var nineCount = 0;
	var eightCount = 0;
	var sevenCount = 0;
	
	 if (result == 10 && doubleTens() == true && failTens() == false){
		 successes = (successes + 2);
		 totalRolled = (totalRolled + 1);
		 tenCount = (tenCount + 1)
		 allResults.push("10");
		 
	 }	 else if (result == 10 && doubleTens() == true && failTens() == true){
		 successes = (successes + 2);
		 totalRolled = (totalRolled + 1);
		 allResults.push("10");
		 diceProcessing(rollDice());
		 
	 }	else if  (result == 10 && doubleTens() == false && failTens() == false){
		 successes = (successes + 1);
		 totalRolled = (totalRolled + 1);
		 allResults.push("10");
		 tenCount = (tenCount + 1)
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
	
}

function beginRolls(){
	var dice = document.getElementById('diceAmount').value;
	var i = 0;
	successes = 0;
	allResults.length = 0
	totalRolled = 0;
	
	
	while (i < dice){
		var x = rollDice()
		diceProcessing(x)
		i++
	}
	
	document.getElementById('successCount').value = successes;
	document.getElementById('results').value = allResults;
	
	
}

