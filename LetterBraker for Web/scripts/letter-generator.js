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
	LG.refreshCount = 0;
	LG.refresh = function(){
			LG.keyCode = generateRandomKeyCode();
		}
})();