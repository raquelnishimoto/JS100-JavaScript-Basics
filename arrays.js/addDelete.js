// We are given the following array of energy sources.

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
// Remove 'fossil' from the array, then add 'geothermal' to the end of the array.

// option 1
// console.log(energy.splice(0, 1));

//option 2
console.log(energy.shift())

console.log(energy.push('geothermal'));
console.log(energy);