import { areaCalculator } from "../src/math/areaCalculator"
import { diameterCalculator } from '../src/math/diameterCalculator'
import { radiusCalculator } from '../src/math/radiusCalculator'
import { circumferenceCalculator } from '../src/math/circumferenceCalculator'

console.log(diameterCalculator({ radius: 2.78 })) //5.56
console.log(radiusCalculator({ diameter: 5.56 })) //2.78
console.log(areaCalculator({ circumference: 17.46 })) // 24.25
console.log(circumferenceCalculator({ area: 24.25 })) //17.46