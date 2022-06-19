export function round(num:number, num2:number = 1):number {
  return num2 * Math.round(num / num2);
}