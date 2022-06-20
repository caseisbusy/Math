import { areaCalculator } from "../src/math/areaCalculator"
import { diameterCalculator } from '../src/math/diameterCalculator'
import { radiusCalculator } from '../src/math/radiusCalculator'
import { circumferenceCalculator } from '../src/math/circumferenceCalculator'
import { cylinderVolume, cylinderHeight, cylinderRadius } from "../src/math/cylinderVHR"


console.log(diameterCalculator({ radius: 2.78 })) //5.56
console.log(radiusCalculator({ diameter: 5.56 })) //2.78
console.log(areaCalculator({ circumference: 17.46 })) // 24.25
console.log(circumferenceCalculator({ area: 24.25 })) //17.46
console.log(cylinderVolume({ height: 2, diameter: 4 })) //25.12
console.log(cylinderHeight({ volume: 64, radius: 3 }))// 2.26
console.log(cylinderRadius({ volume: 63, height: 20 })) // 1.00