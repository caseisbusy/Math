export function inequality(num: number | string, num2: number | string):any {
  if(num > num2) { 
		return `${num} is greater than ${num2}`
	} else if(num < num2) { 
		return `${num} is smaller than ${num2}` 
	} else if(num <= num2) {
		return `${num} is greater than or equal to ${num2}`
	} else if(num >= num2) {
	  return `${num} is less than or equal to ${num2}`
 }
}