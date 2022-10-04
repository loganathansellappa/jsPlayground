/*
  Filter function
*/

Array.prototype.filter = function(fn){
  const r = []
  this.forEach(a => {
    if(fn(a)) {
      r.push(a)
    }
  })
  return r
}

let as = [1,2,3].filter(e => e !== 1)
as
