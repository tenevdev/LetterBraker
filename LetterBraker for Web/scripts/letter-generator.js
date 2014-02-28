(function(){
	
	function generateRandomKeyCode(){
		// a = 65, z = 90
		return Math.floor(Math.random()*25 + 65);
	}
	LG = {
		keyCode : generateRandomKeyCode(),
		refreshCount : 0,
		refresh : function(){
			keyCode = generateRandomKeyCode();
			refreshCount++;
		}
	}
})();