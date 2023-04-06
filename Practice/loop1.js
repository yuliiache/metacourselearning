
function numberOfMonth (population,n) {
   const numberOfMonth = 12 * 30;
   for (let i = 0; i < numberOfMonth; i++) {
       population += n
   }
   return population

}
let newpop = numberOfMonth(3248, 6)
console.log(newpop)