const colorCombinator = require('./color-combinator.js')
const colorDeconstructor = require('./color-deconstructor.js')

const color1 = getInput(0) 
const color2 = getInput(1)

// const outPut = colorCombinator(color1,color2)


// const color=getInput(0)
// const outPut1= colorDeconstructor(color)


if(color1 === undefined && color2 === undefined){
  return  " Please place in atleast one color"
  // if(color2 === 'undefines'){
  //   return  " Please place in atleast one color"
  // } return  " Please place in atleast one color"
}
else if(color1 !== undefined && color2 === undefined){
  let colorDecon = colorDeconstructor
  console.log(colorDecon(color1))
}
else if (color1 !== undefined && color2 !== undefined){
  let colors = colorCombinator
  console.log(colors(color1,color2))
}










function getInput(i) {
  return process.argv[i + 2];
}
