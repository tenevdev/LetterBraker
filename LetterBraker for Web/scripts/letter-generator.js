(function(){
	
	function correctRounding(number){
		//
		number *= 10;
		if ( number % 10 < 5 ){
			return number /10 | 0;
		}
		else return number/10 + 1 | 0;
	}

	function generateRandomKeyCode(){
		// a = 65, z = 90
		//Error Check -- alert(correctRounding(5.72));

		return correctRounding(Math.floor(Math.random()*25 + 65));
	}

	LG = {};

	LG.keyCode = 65 //a;
	LG.letterCounter = new Array();
	LG.refreshCount = 0;

	LG.addToLetterCount = function (letterCode){
		if (LG.letterCounter[letterCode - 65] === undefined) LG.letterCounter[letterCode - 65] = 0;
		LG.letterCounter[letterCode - 65] ++;
		return;
	}

	LG.capitalise = function (letter){
		if (letter >= 97 && letter <= 122) return letter - 32;
		return letter;
	}
	LG.refresh = function(){
			LG.keyCode = generateRandomKeyCode();
			LG.addToLetterCount(LG.keyCode);
		}
})();