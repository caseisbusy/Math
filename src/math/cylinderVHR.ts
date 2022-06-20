type parameters = {
  diameter?: number;
  height?: number;
  radius?: number;
	volume?: number;
}


export function cylinderVolume({ diameter, height, radius }: parameters) {
	if(!height && !radius || !height && !diameter) throw new Error("Provide a height & radius or a height & diameter")
	if(height && radius) { 
		return 3.14 * Math.pow(radius, 2) * height
	} else if(height && diameter) {
		return 3.14 * Math.pow(diameter/2, 2) * height
	}
}


export function cylinderHeight({ diameter, radius, volume }: parameters) {
	if(!volume && radius || !volume && diameter) throw new Error("Provide a volume & radius or a volume & diameter")
	if(volume && radius) {
		return volume/(3.14 * Math.pow(radius, 2))
	} else if(volume && diameter) {
		return volume/(3.14 * Math.pow(diameter/2, 2))
	}
}

export function cylinderRadius({ volume, height }: parameters) {
	if(!volume && !height) throw new Error("Provide a volume & a height")
	if(volume && height) {
		return Math.sqrt(volume / (3.14 * height))
	}
}