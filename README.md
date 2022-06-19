# Basics

```js
const { add, substract, multiply, divide } = require("solomath")
add(4, 2) // 6
substract(5, 2) //3
multiply(20, 10) //200
divide(20, 10) //2
```
# Degrees and Radians
```js
const { toDegrees, toRadians } = require("solomath")
toDegrees(35) //2005.35
toRadians(120) //2.09
```

# Mode, Median, mean 
```js
const { mean, median, mode } = require("solomath")
median([1, 3, -1, 4]) //2
mean([3, 4, 5, 6, 7, -4]) //3.5
mode([3,2,4,4,1]) //[ 4 ]
```

# Useless
```js
const { mod, gcd, lcm, inequality } = require("solomath")
mod(10 / 24, 1) //0.41
gcd(123, 321) // 3
lcm(984, 482) // 237144
inequality(3, 4) // 3 is smaller than 4
```

# Complementary and Supplementary
```js
const { complementary, supplementary } = require("solomath")
complementary(64,14) //Your third complementary number is 12
supplementary(130,31) //Your third supplementary number is 19
```
# Circles
```js
const { diameterCalculator, radiusCalculator, areaCalculator, circumferenceCalculator } = require("solomath")
diameterCalculator({ radius: 2.78 }) //5.56
radiusCalculator({ diameter: 5.56 }) //2.78
areaCalculator({ circumference: 17.46 }) // 24.25
circumferenceCalculator({ area: 24.25 }) //17.46
```

# Extras
```js
const { round, pow, squareRoot, cubeRoot, nthRoot } = require("solomath")
round(19.5) //20
pow(12, 3) // 1728
squareRoot(36) // 6
cubeRoot(64) // 4
nthRoot(12,3) //2.2894284851066637
```