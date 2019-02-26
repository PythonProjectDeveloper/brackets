module.exports = function check(str, bracketsConfig) {
  // your solution
  if (str.length % 2 !== 0) return false

  const reducer = (accumulator, curent_value) => {
    accumulator[curent_value[1]] = curent_value[0]
    return  accumulator
  }
  const pairs = bracketsConfig.reduce(reducer, {})
  
  let index = 1
  while (str.length > index) {
    let cur_char = str[index]
    let prev_char = str[index - 1]

    if (pairs.hasOwnProperty(cur_char) && prev_char === pairs[cur_char]){
      str = str.slice(0, index - 1) + str.slice(index + 1, str.length)
      index -= 1
    }
    else index += 1
  }

  if (str.length) return false

  return true
}
