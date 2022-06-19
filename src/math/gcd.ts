export function gcd(a, b) {
    var _arc;
    while (b) {
      _arc = [b, a % b], a = _arc[0], b = _arc[1];
    }
    return a;
  };