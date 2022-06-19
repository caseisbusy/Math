type params = {
  diameter?: number;
  circumference?: number;
  area?: number;
}

export function radiusCalculator({ diameter, circumference, area }: params) {
	if(!area && !diameter && !circumference) throw new Error("Provide 1 arguement")
	if(area && diameter || area && circumference || diameter && circumference) throw new Error("Only 1 arguement")
	if(diameter) {
		return `Radius = ${diameter / 2}`
	} else if(circumference) {
		return `Radius = ${circumference / (2 * Math.PI)}`
	}
	if(area) {
		return `Radius = ${Math.sqrt(area/Math.PI)}`
	}
}