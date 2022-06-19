export function mode(values) {
  const num = values.length
    const count = {}
    let mode = []
    let max = 0
    for (let i = 0; i < values.length; i++) {
      const value = values[i]

      if (!(value in count)) {
        count[value] = 0
      }

      count[value]++

      if (count[value] === max) {
        mode.push(value)
      } else if (count[value] > max) {
        max = count[value]
        mode = [value]
      }
    }
    return mode
  }