export function mod(num:number, limit:number):number {
  if (!limit) {
    return 0;
  }
  const modulo = num % limit;
  if (num >= 0) {
    return modulo;
  } else if (modulo < 0) {
    return (modulo + limit) % limit;
  } else {
    return 0;
  }
}