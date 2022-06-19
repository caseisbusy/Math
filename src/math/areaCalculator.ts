type params = {
  diameter?: number;
  circumference?: number;
  radius?: number;
}

export function areaCalculator({ diameter, circumference, radius }: params) {
	if(!radius && !diameter && !circumference) throw new Error("Provide 1 arguement")
	if(radius && diameter || radius && circumference || diameter && circumference) throw new Error("Only 1 arguement")
	if(diameter) {
		return `Area = ${1/4 * (Math.PI * (Math.pow(diameter, 2)))}`
	} else if(circumference) {
		return `Area = ${Math.pow(circumference, 2) / (4 * Math.PI)}`
	}
	if(radius) {
		return `Area = ${Math.PI * Math.pow(radius, 2)}`
	}
}