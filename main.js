const colorCombinator = require('./color-combinator.js')
const colorDeconstructor = require('./color-deconstructor.js')

const color1 = getInput(0) 
const color2 = getInput(1)

const outPut = colorCombinator(color1,color2)


const color=getInput(0)
const outPut1= colorDeconstructor(color)


console.log(outPut)
console.log(outPut1)



function getInput(i) {
  return process.argv[i + 2];
}
