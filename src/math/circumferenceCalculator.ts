type parameters = {
	radius?: number,
	area?: number,
	diameter?: number
}

export function circumferenceCalculator({ radius, area, diameter }: parameters) {
		if(!radius && !area && !diameter) throw new Error("Provide 1 arguement")
		if(radius && diameter || radius && area || diameter && area) throw new Error("Only 1 arguement")
	if(radius) {
		return `Circumference = ${2 * (Math.PI * radius)}`
	} else if(area) {
		return `Circumference = ${2 * Math.sqrt(Math.PI * area)}`
	} else if(diameter) {
		return `Circumference = ${(Math.PI * diameter)}`
	}
}