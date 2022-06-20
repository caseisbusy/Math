export {
	add
} from './math/add'

export {
	substract
} from './math/substract'

export {
	divide
} from './math/divide'

export {
	multiply
} from './math/multiply'

export {
	round
} from './math/round'

export {
	mod
} from './math/mod'

export {
	toDegrees, 
	toRadians
} from './math/degree'

export {
	lcm
} from './math/lcm'

export {
	gcd
} from './math/gcd'

export {
	inequality
} from './math/inequality'

export {
	pow
} from './math/pow'

export {
	squareRoot
} from './math/squareRoot'

export {
	cubeRoot
} from './math/cubeRoot'

export {
	median
} from './math/median'

export {
	mean
} from './math/mean'

export {
	mode
} from './math/mode'

export {
	nthRoot
} from './math/nthRoot'

export {
	complementary
} from './math/complementary'

export {
	supplementary
} from './math/supplementary'

export {
	cylinderVolume,
	cylinderHeight
} from './math/cylinderVolume'

const unhandledRejections = new Map();
process.on("uncaughtException", (err, expected) => {
	console.log(`Error: ${err} \n Expected: ${expected}`)
})
process.on('unhandledRejection', (reason, promise) => {
  unhandledRejections.set(promise, reason);
});
process.on('rejectionHandled', (promise) => {
  unhandledRejections.delete(promise);
});
