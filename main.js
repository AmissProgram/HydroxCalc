async function playSound(audioFile) {
  var audio = new Audio(audioFile);
  audio.play();
}

function calculate(hydroxideType) {
	playSound("click-sound.wav")
	
	const output = document.querySelector(".output")
	const molecularWeightStr = document.querySelector(".molecular-weight-input").value
	
	const molecularWeight = Number(molecularWeightStr)
	
	//Wrong input section 
	if (!molecularWeightStr) {
		output.innerHTML = "Insert molecular weight first"
		return
	} else if (!molecularWeight) {
		output.innerHTML = "Only integers above 0 are allowed as input"
		return
	}
	
	//Calculation sector
	let H = 0;
	let outputText;
	
	for (let C=1; molecularWeight>=C; C++) {
		if (hydroxideType === "Alkane") {
			H = C*2+2
		} else if (hydroxideType === "Alkene") {
			H = C*2
		} else if (hydroxideType === "Alkyne") {
			H = C*2-2
		}
		
		if (C*12+H === molecularWeight) {
			outputText = `${hydroxideType}: C${C}H${H}`
			break
		}
	}
	

	//Output modifier
	if (outputText) {
		output.innerHTML = outputText
	} else {
		output.innerHTML = `No ${hydroxideType} with ${molecularWeight} molecular weight`
	}
		
	
}
	