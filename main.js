function calculate(hydroxideType) {
	const output = document.querySelector(".output")
	const molecularWeightStr = document.querySelector(".molecular-weight-input").value
	
	const molecularWeight = Number(molecularWeightStr)
	
	//Wrong input section 
	if (!molecularWeightStr) {
		output.innerHTML = "Insert molecular weight first"
		return
	} else if (!molecularWeight){
		output.innerHTML = "Only integers allowed as input"
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
			H = C*2-1
		}
		
		if (C*12+H === molecularWeight) {
			outputText = `${hydroxideType}: C${C}H${H}`
			break
		}
	}
	
	console.log(outputText)

	//Output modifier
	if (outputText) {
		output.innerHTML = outputText
	} else {
		output.innerHTML = `There is no ${hydroxideType} with ${molecularWeight} molecular weight`
	}
		
	
}
	