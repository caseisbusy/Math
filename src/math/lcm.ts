import { gcd } from './gcd'

export function lcm(a, b) {
	return a / gcd(a, b) * b
}